{ self, packMeta, nixMinecraftModule }:
{ pkgs, lib, ... }:

let
  name = "videcraft-create";
  dataDir = "/srv/minecraft";
  port = 25565;

  heap = "8G";
  memoryMax = "12G";

  modpack = self.packages.${pkgs.stdenv.hostPlatform.system}.modpack;
  server = self.packages.${pkgs.stdenv.hostPlatform.system}.server;

  packConfig = lib.mapAttrs' (
    entry: _: lib.nameValuePair "config/${entry}" "${modpack}/config/${entry}"
  ) (builtins.readDir "${modpack}/config");

  operators = [
    "nonplay"
  ];

  players = [
  ];

  offlineUUID =
    player:
    let
      h = builtins.hashString "md5" "OfflinePlayer:${player}";
      sub = start: len: builtins.substring start len h;
      variant = {
        "0" = "8"; "1" = "9"; "2" = "a"; "3" = "b";
        "4" = "8"; "5" = "9"; "6" = "a"; "7" = "b";
        "8" = "8"; "9" = "9"; "a" = "a"; "b" = "b";
        "c" = "8"; "d" = "9"; "e" = "a"; "f" = "b";
      };
    in
    "${sub 0 8}-${sub 8 4}-3${sub 13 3}-${variant.${sub 16 1}}${sub 17 3}-${sub 20 12}";

  byName = names: lib.genAttrs names offlineUUID;

  jvmFlags = [
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
  ];
in
{
  imports = [ nixMinecraftModule ];

  services.minecraft-servers = {
    enable = true;
    eula = true;
    inherit dataDir;

    servers.${name} = {
      enable = true;
      package = server;
      openFirewall = true;

      operators = byName operators;
      whitelist = byName (lib.unique (players ++ operators));

      jvmOpts = jvmFlags ++ [
        "-Xms${heap}"
        "-Xmx${heap}"
      ];

      serverProperties = {
        server-port = port;
        motd = "VideCraft: Create ${packMeta.version}";
        white-list = false;
        online-mode = false;
        enforce-secure-profile = false;
        max-players = 20;
        difficulty = "normal";
        view-distance = 12;
        simulation-distance = 12;
        allow-flight = true;
        spawn-protection = 0;
        enable-command-block = false;
        max-tick-time = -1;
      };

      symlinks = {
        "mods" = "${modpack}/mods";
      };

      files = packConfig // {
        "kubejs" = "${modpack}/kubejs";
        "defaultconfigs" = "${modpack}/defaultconfigs";
      };
    };
  };

  systemd.services."minecraft-server-${name}" = {
    serviceConfig = {
      NoNewPrivileges = true;
      ProtectSystem = "strict";
      ReadWritePaths = [ dataDir ];
      RestartSec = "10s";
      CPUWeight = 50;
      IOWeight = 50;
      MemoryMax = memoryMax;
    };
    unitConfig = {
      StartLimitIntervalSec = 300;
      StartLimitBurst = 5;
    };
  };
}
