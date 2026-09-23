{ pkgs, neoforge, version }:

pkgs.runCommand "videcraft-skinfix-${version}.jar"
{
  src = ./.;
  nativeBuildInputs = [ pkgs.jdk21_headless ];
} ''
  cp=$(find ${neoforge}/libraries \( -name 'sponge-mixin-*.jar' -o -name 'asm-9.*.jar' -o -name 'asm-tree-9.*.jar' \) | tr '\n' ':')
  mkdir -p classes/META-INF
  javac --release 21 -proc:none -cp "$cp" -d classes $src/SkinFixPlugin.java
  cp $src/videcraft_skinfix.mixins.json classes/
  sed 's/^version = .*/version = "${version}"/' $src/neoforge.mods.toml > classes/META-INF/neoforge.mods.toml
  jar --create --file $out -C classes .
''
