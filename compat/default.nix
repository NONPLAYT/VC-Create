{ pkgs, neoforge, modpack, version }:

pkgs.runCommand "videcraft-${version}.jar"
{
  src = ./.;
  nativeBuildInputs = [ pkgs.jdk21_headless ];
} ''
  cp=$(find ${neoforge}/libraries -name '*.jar' | tr '\n' ':')${modpack}/mods/deeperdarker-neoforge-1.21.1-1.4.1.jar
  mkdir -p classes/META-INF
  javac --release 21 -proc:none -cp "$cp" -d classes $src/VideCraftPlugin.java $src/mixin/*.java
  cp $src/videcraft.mixins.json classes/
  sed 's/^version = .*/version = "${version}"/' $src/neoforge.mods.toml > classes/META-INF/neoforge.mods.toml
  jar --create --file $out -C classes .
''
