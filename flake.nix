{
  description = "VideCraft: Create — packwiz modpack and NixOS server module";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

    nix-minecraft = {
      url = "github:Infinidoge/nix-minecraft";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      self,
      nixpkgs,
      nix-minecraft,
    }:
    let
      inherit (nixpkgs) lib;

      systems = [
        "x86_64-linux"
        "aarch64-linux"
      ];
      forAllSystems = lib.genAttrs systems;

      pkgsFor = forAllSystems (
        system:
        import nixpkgs {
          inherit system;
          overlays = [ nix-minecraft.overlay ];
          config.allowUnfreePredicate =
            pkg:
            builtins.elem (lib.getName pkg) [
              "neoforge"
              "vanilla"
              "minecraft-server"
            ];
        }
      );

      packHash = "sha256-ZuBaCyoTJUISkWOxldxr0U93XkclouKIHoEuArF1VoI=";

      packMeta = lib.importTOML ./pack.toml;

      escape = lib.replaceStrings [ "." ] [ "_" ];
      serverAttr = "neoforge-${escape packMeta.versions.minecraft}-${escape packMeta.versions.neoforge}";
    in
    {
      packages = forAllSystems (
        system:
        let
          pkgs = pkgsFor.${system};
        in
        rec {
          modpack = pkgs.fetchPackwizModpack {
            pname = "videcraft-create";
            version = packMeta.version;
            src = self;
            inherit packHash;
            side = "server";
          };

          server =
            if pkgs.neoforgeServers ? ${serverAttr} then
              pkgs.neoforgeServers.${serverAttr}
            else
              throw ''
                nix-minecraft has no NeoForge ${packMeta.versions.neoforge} for Minecraft ${packMeta.versions.minecraft}
                (looked for neoforgeServers.${serverAttr}). Try: nix flake update nix-minecraft
              '';

          default = modpack;
        }
      );

      nixosModules.default = import ./nix/minecraft.nix {
        inherit self packMeta;
        nixMinecraftModule = nix-minecraft.nixosModules.minecraft-servers;
      };
    };
}
