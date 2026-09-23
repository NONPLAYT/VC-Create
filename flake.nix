{
  description = "VideCraft: Create";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    nix-minecraft = {
      url = "github:Infinidoge/nix-minecraft";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, nix-minecraft }:
    let
      inherit (nixpkgs) lib;
      pack = lib.importTOML ./pack.toml;
      packHash = "sha256-BkwYKOmKFJSZcpzaMb/0u8iLxBcynmR+5BxafVMH/iI=";
      escape = lib.replaceStrings [ "." ] [ "_" ];
      neoforgeAttr = "neoforge-${escape pack.versions.minecraft}-${escape pack.versions.neoforge}";

      modpackFor = pkgs: pkgs.fetchPackwizModpack {
        pname = "vc-create";
        version = pack.version;
        src = self;
        inherit packHash;
        side = "server";
      };

      skinfixFor = pkgs: import ./skinfix {
        inherit pkgs;
        neoforge = pkgs.neoforgeServers.${neoforgeAttr};
        version = "1.0.0";
      };

      pkgsFor = system: import nixpkgs {
        inherit system;
        overlays = [ nix-minecraft.overlay ];
        config.allowUnfree = true;
      };
    in
    {
      packages.x86_64-linux =
        let pkgs = pkgsFor "x86_64-linux"; in
        {
          modpack = modpackFor pkgs;
          skinfix = skinfixFor pkgs;
          default = modpackFor pkgs;
        };

      nixosModules.default = { config, lib, pkgs, ... }:
        let
          cfg = config.services.videcraft;
          modpack = modpackFor pkgs;
          neoforge = pkgs.neoforgeServers.${neoforgeAttr};
          launchArgs = "${neoforge}/libraries/net/neoforged/neoforge/${pack.versions.neoforge}/unix_args.txt";
          jdk = pkgs.jdk21_headless;

          jvmFlags = lib.concatStringsSep " " [
            "-XX:+UseG1GC"
            "-XX:+ParallelRefProcEnabled"
            "-XX:MaxGCPauseMillis=200"
            "-XX:+UnlockExperimentalVMOptions"
            "-XX:+DisableExplicitGC"
            "-XX:+AlwaysPreTouch"
            "-XX:G1NewSizePercent=30"
            "-XX:G1MaxNewSizePercent=40"
            "-XX:G1HeapRegionSize=8M"
            "-XX:G1ReservePercent=20"
            "-XX:G1HeapWastePercent=5"
            "-XX:G1MixedGCCountTarget=4"
            "-XX:InitiatingHeapOccupancyPercent=15"
            "-XX:G1MixedGCLiveThresholdPercent=90"
            "-XX:G1RSetUpdatingPauseTimePercent=5"
            "-XX:SurvivorRatio=32"
            "-XX:+PerfDisableSharedMem"
            "-XX:MaxTenuringThreshold=1"
            "-Dlog4j.configurationFile=${./server/log4j2.xml}"
          ];

          proxyCompatibleForge = pkgs.fetchurl {
            url = "https://cdn.modrinth.com/data/vDyrHl8l/versions/qiZ49HIW/proxy-compatible-forge-1.3.1.jar";
            hash = "sha256-6lQa/2J2lw2YUGllyOcb1K1zKUUvYxsvResI7epCUnE=";
          };

          proxyForwarding = pkgs.writeText "proxy-compatible-forge.toml" ''
            [general]
              configVersion = 1

            [forwarding]
              enabled = true
              mode = "MODERN"
              secret = "@FORWARDING_SECRET@"
              approvedProxyHosts = ["127.0.0.1"]
          '';

          disabledData = pkgs.writeText "disabled.json" ''
            {"neoforge:conditions":[{"type":"neoforge:false"}]}
          '';

          ops = pkgs.writeText "ops.json" (builtins.toJSON (lib.mapAttrsToList
            (name: uuid: { inherit name uuid; level = 4; bypassesPlayerLimit = true; })
            cfg.operators));

          serverProperties = pkgs.writeText "server.properties" ''
            server-ip=127.0.0.1
            server-port=${toString cfg.port}
            level-seed=2103802107252046525
            motd=
            online-mode=false
            difficulty=normal
            spawn-protection=0
            max-players=20
            view-distance=24
            simulation-distance=8
            entity-broadcast-range-percentage=100
            allow-flight=true
            enforce-secure-profile=false
            sync-chunk-writes=false
            max-tick-time=-1
            region-file-compression=lz4
          '';

          lobbyProperties = pkgs.writeText "server.properties" ''
            server-ip=127.0.0.1
            server-port=${toString cfg.lobbyPort}
            level-name=lobby
            level-type=minecraft:flat
            generator-settings={"layers":[],"biome":"minecraft:the_void","lakes":false,"features":false,"structure_overrides":[]}
            generate-structures=false
            motd=
            online-mode=false
            gamemode=spectator
            force-gamemode=true
            difficulty=peaceful
            spawn-monsters=false
            spawn-npcs=false
            spawn-animals=false
            max-players=20
            view-distance=4
            simulation-distance=4
            allow-flight=true
            pvp=false
            enforce-secure-profile=false
            sync-chunk-writes=false
            max-tick-time=-1
          '';

          voicechat = port: bind: pkgs.writeText "voicechat-server.properties" ''
            port=${toString port}
            bind_address=${bind}
            ${lib.optionalString (bind != "127.0.0.1") "voice_host=${bind}:${toString port}"}
          '';

          stopScript = name: pkgs.writeShellScript "${name}-stop" ''
            echo stop > /run/${name}.stdin
            while kill -0 "$1" 2> /dev/null; do sleep 1; done
          '';

          installPack = ''
            printf 'eula=true\n' > eula.txt
            rm -rf mods config kubejs defaultconfigs
            install -d -m 750 mods
            for jar in ${modpack}/mods/*.jar; do
              case "$(basename "$jar")" in
                easylogin-*) ;;
                *) ln -s "$jar" mods/ ;;
              esac
            done
            ln -s ${proxyCompatibleForge} mods/proxy-compatible-forge.jar
            for dir in config kubejs defaultconfigs; do
              [ -e ${modpack}/$dir ] && cp -r --no-preserve=all ${modpack}/$dir $dir
            done
            install -d -m 750 config config/voicechat
            install -m 640 ${proxyForwarding} config/proxy-compatible-forge.toml
            ${pkgs.gnused}/bin/sed -i "s|@FORWARDING_SECRET@|$(cat ${cfg.forwardingSecretFile})|" config/proxy-compatible-forge.toml
          '';

          mkServer = { name, description, heap, properties, cpuWeight, memoryMax, extraPreStart }: {
            sockets.${name} = {
              bindsTo = [ "${name}.service" ];
              socketConfig = {
                ListenFIFO = "/run/${name}.stdin";
                SocketMode = "0660";
                SocketUser = "minecraft";
                SocketGroup = "minecraft";
                RemoveOnStop = true;
                FlushPending = true;
              };
            };

            services.${name} = {
              inherit description;
              wantedBy = [ "multi-user.target" ];
              requires = [ "${name}.socket" ];
              after = [ "network.target" "${name}.socket" ];
              restartIfChanged = false;
              preStart = installPack + ''
                install -m 644 ${properties} server.properties
              '' + extraPreStart;
              environment.LD_LIBRARY_PATH = lib.makeLibraryPath [ pkgs.udev ];
              serviceConfig = {
                User = "minecraft";
                Group = "minecraft";
                StateDirectory = name;
                WorkingDirectory = "/var/lib/${name}";
                ExecStart = "${jdk}/bin/java -Xms${heap} -Xmx${heap} ${jvmFlags} @${launchArgs} nogui";
                ExecStop = "${stopScript name} $MAINPID";
                Restart = "on-failure";
                RestartSec = "10s";
                TimeoutStartSec = 600;
                TimeoutStopSec = 180;
                StandardInput = "socket";
                StandardOutput = "journal";
                StandardError = "journal";
                CPUWeight = cpuWeight;
                MemoryMax = memoryMax;
                MemorySwapMax = "0";
                CapabilityBoundingSet = [ "" ];
                DeviceAllow = [ "" ];
                LockPersonality = true;
                NoNewPrivileges = true;
                PrivateDevices = true;
                PrivateTmp = true;
                PrivateUsers = true;
                ProtectClock = true;
                ProtectControlGroups = true;
                ProtectHome = true;
                ProtectHostname = true;
                ProtectKernelLogs = true;
                ProtectKernelModules = true;
                ProtectKernelTunables = true;
                ProtectProc = "invisible";
                ProtectSystem = "strict";
                ReadWritePaths = [ "/run/${name}.stdin" ];
                RestrictAddressFamilies = [ "AF_UNIX" "AF_INET" "AF_INET6" ];
                RestrictNamespaces = true;
                RestrictRealtime = true;
                RestrictSUIDSGID = true;
                SystemCallArchitectures = "native";
                UMask = "0027";
              };
              unitConfig = {
                StartLimitIntervalSec = 300;
                StartLimitBurst = 5;
              };
            };
          };
        in
        {
          options.services.videcraft = {
            enable = lib.mkEnableOption "VideCraft: Create server with its login lobby";
            port = lib.mkOption { type = lib.types.port; default = 25566; };
            lobbyPort = lib.mkOption { type = lib.types.port; default = 25567; };
            voicePort = lib.mkOption { type = lib.types.port; default = 24454; };
            publicAddress = lib.mkOption { type = lib.types.str; };
            forwardingSecretFile = lib.mkOption { type = lib.types.path; };
            operators = lib.mkOption { type = lib.types.attrsOf lib.types.str; default = { }; };
            heap = lib.mkOption { type = lib.types.str; default = "16G"; };
            lobbyHeap = lib.mkOption { type = lib.types.str; default = "3G"; };
          };

          config = lib.mkIf cfg.enable {
            users.groups.minecraft = { };
            users.users.minecraft = {
              isSystemUser = true;
              group = "minecraft";
            };

            networking.firewall.allowedUDPPorts = [ cfg.voicePort ];

            systemd = lib.mkMerge [
              (mkServer {
                name = "minecraft-create";
                description = "VideCraft: Create ${pack.version}";
                heap = cfg.heap;
                properties = serverProperties;
                cpuWeight = 400;
                memoryMax = "24G";
                extraPreStart = ''
                  install -m 644 ${ops} ops.json
                  install -m 644 ${voicechat cfg.voicePort cfg.publicAddress} config/voicechat/voicechat-server.properties
                '';
              })
              (mkServer {
                name = "minecraft-create-lobby";
                description = "VideCraft: Create ${pack.version} login lobby";
                heap = cfg.lobbyHeap;
                properties = lobbyProperties;
                cpuWeight = 100;
                memoryMax = "6G";
                extraPreStart = ''
                  install -m 644 ${voicechat (cfg.voicePort + 1) "127.0.0.1"} config/voicechat/voicechat-server.properties
                  install -m 644 ${disabledData} kubejs/data/apotheosis/advancement/progression/haven.json
                  install -m 644 ${disabledData} kubejs/data/apotheosis/advancement/progression/root.json
                  rm -rf lobby/datapacks/videcraft
                  install -d -m 750 lobby/datapacks
                  cp -r --no-preserve=all ${./server/lobby} lobby/datapacks/videcraft
                '';
              })
            ];
          };
        };
    };
}
