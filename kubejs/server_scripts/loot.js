LootJS.modifiers((event) => {
  //event.addTableModifier("minecraft:chests/simple_dungeon").addLoot("minecraft:netherite_sword");
  //event.addTableModifier(/dungeons_arise:chests.*/).addLoot("minecraft:netherite_sword");


  //event.addTableModifier(/.*/).removeLoot("bosses_of_mass_destruction:blazing_eye");

  event
  .addTableModifier("bosses_of_mass_destruction:chests/gauntlet")
  .addLoot(LootEntry.of(`kubejs:cursed_eye_fragment_core`).setCount(1).randomChance(1.0))
  .addLoot(LootEntry.of(`apotheosis:common_material`).setCount([3,10]).randomChance(1.0))
  .addLoot(LootEntry.of(`simplyswords:frostfall`).setCount(1).randomChance(0.2))
  .addLoot(LootEntry.of(`simplyswords:watcher_claymore`).setCount(1).randomChance(0.2))
  .addLoot(LootEntry.of(`kubejs:boss_token`).setCount(1).randomChance(1.0));

  // Add Create Stuff to villages
  event
    .addTableModifier(/(revampedvillages:.*)/)
    .addLoot(LootEntry.of("create:belt_connector").setCount([1, 3]).randomChance(0.35))
    .addLoot(LootEntry.of("create:shaft").setCount([1, 4]).randomChance(0.35))
    .addLoot(LootEntry.of("create:zinc_ingot").setCount([1, 5]).randomChance(0.20))
    .addLoot(LootEntry.of("create:andesite_alloy").setCount([2, 10]).randomChance(0.40))
    .addLoot(LootEntry.of("create:gearbox").setCount([1, 3]).randomChance(0.20));

  // Easy
  event
    .addTableModifier(/(minecraft:chests.*|revampedvillages:.*|mvs:.*)/)
    .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([1, 2]).randomChance(0.25));

  // Medium
  event
  .addTableModifier(/(minecraft:chests\/(bastion|shipwreck).*|irons_spellbooks:chests.*|eternal_starlight:chests.*|mns:.*|formationsnether:.*|repurposed_structures:chests\/.*|adventuredungeons:chests\/.*)/)
  .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([2, 4]).randomChance(0.40));

  // Hard
  event
    .addTableModifier(/(minecraft:chests\/(end_city|ancient_city|stronghold).*|betterfortresses:chests.*|dungeons_arise:chests\/.*)/)
    .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([3, 7]).randomChance(0.60));


  const trialChamberTables = [
    "minecraft:chests/trial_chambers/corridor",
    "ancient_cities:ancient_city_barrel",
    "minecraft:chests/trial_chambers/entrance",
    "minecraft:chests/trial_chambers/intersection",
    "minecraft:chests/trial_chambers/intersection_barrel"
  ];

  for (const table of trialChamberTables) {
    event
      .addTableModifier(table)
      .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([1, 5]).randomChance(0.15));
  }

  const ironsAdvanced = [
    "minecraft:chests/pillager_outpost",
    "irons_spellbooks:chests/catacombs/coffin_loot",
    "irons_spellbooks:chests/catacombs/crypt_loot",
    "irons_spellbooks:chests/catacombs/hidden_trough_treasure",
    "irons_spellbooks:chests/citadel/citadel_vault",
    "irons_spellbooks:chests/citadel/rampart_chest",
    "irons_spellbooks:chests/citadel/citadel_bookshelf",
    "revampedvillages:treasure",
    'nova_structures:chests/ancient_city_ice_box',
    'nova_structures:chests/ancient_city'
  ];
  for (const table of ironsAdvanced) {
    event
      .addTableModifier(table)
      .addLoot(LootEntry.of("magic_coins:silver_coin").setCount([2, 7]).randomChance(0.40));
  }
});