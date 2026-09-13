// === REMOVE BY RECIPE ID ===
const removeRecipesById = [
  'simplyswords:sword_on_a_stick',
  'apotheosis:book',
  'waystones:warp_stone',
  'apothic_enchanting:library',
  'apothic_enchanting:prismatic_web',
  'naturescompass:natures_compass',
  'apothic_enchanting:filtering_shelf',
  'apothic_enchanting:ender_library',
  'irons_spellbooks:lesser_spell_slot_upgrade',
  'irons_spellbooks:druidic_spell_book',
  'irons_spellbooks:cinderous_soulcaller',
  'irons_spellbooks:wayward_compass',
  'irons_spellbooks:amethyst_rapier',  
  'irons_spellbooks:citadel_map',  
  'gamediscs:gaming_console',
  'constructionstick:template_unbreakable',
  'multibeds:feather_pile',
  'cataclysm:storm_eye',
  'cataclysm:monstrous_eye',
  'cataclysm:mech_eye',
  'cataclysm:desert_eye',
  'cataclysm:void_eye',

  'apotheosis:sigil_of_socketing',
  'apotheosis:sigil_of_withdrawal',
  'apotheosis:sigil_of_rebirth',
  'apotheosis:sigil_of_enhancement',      
  'farmingforblockheads:green_fertilizer',
  'farmingforblockheads:red_fertilizer',
  'farmingforblockheads:yellow_fertilizer',
  'farmingforblockheads:feeding_trough',
  'farmingforblockheads:chicken_nest',
  'create_sa:block_picker_recipe',
  'create_mechanical_extruder:mechanical_brass_extruder',
  'create_mechanical_extruder:crafting/mechanical_extruder',
  //
  'garnished:crushing/zultanite/iron_from_zultanite',
  'garnished:crushing/zultanite/zinc_from_zultanite',
  'garnished:crushing/zultanite/gold_from_zultanite',
  'garnished:crushing/zultanite/copper_from_zultanite',
  'garnished:crushing/materials_from_unstable_stone',
  'garnished:milling/crushed_salt',
  'garnished:crushing/crushed_salt',
  'garnished:integration/create_aquatic_ambitions/crushed_salt_crushing',
  'create_aquatic_ambitions:crushing/prismarine_bricks_to_lapis_and_copper',
  'create_aquatic_ambitions:crushing/prismarine_to_lapis',
  'create_aquatic_ambitions:smelting/veridium',
  'minecraft:andesite',
  'create:crushing/tuff_recycling',
  'create:crushing/tuff',
  'create:crafting/kinetics/belt_connector',
  'create:haunting/glow_ink_sac',

  'hazennstuff:crafting/curios/mana_crystal_ruptured',
  'hazennstuff:crafting/curios/mana_crystal_refined',
  'hazennstuff:crafting/curios/mana_crystal_reinforced',  

  'hazennstuff:crafting/curios/life_crystal_shattered',
  'hazennstuff:crafting/curios/life_crystal_sacred',
  'hazennstuff:crafting/curios/life_crystal_strengthened', 

  'hazennstuff:crafting/curios/spirit_crystal_abstract',
  'hazennstuff:crafting/curios/spirit_crystal_advanced',
  'hazennstuff:crafting/curios/spirit_crystal_abomination',  
  'hazennstuff:crafting/materials/divine_mold',

  'bosses_of_mass_destruction:void_lily',    

  'crystal_chronicles:divinite_shard',
  'crystal_chronicles:hemalite_shard',
  'crystal_chronicles:voidstone_shard',
  'crystal_chronicles:voltite_shard',
  'crystal_chronicles:floralite_shard',
  'crystal_chronicles:volcanite_shard',
  'crystal_chronicles:ice_shard',


  'supplementaries:sus_bricks',
  'supplementaries:sus_sand',
  'supplementaries:sus_gravel',
  // Recipe conflits
  'garnished:haunting/dragon_breath',
  'garnished:emptying/dragon_breath',
  'multibeds:feather_pile_uncraft',
  'create_sa:small_filling_tank_recipe',
  'simplyswords:iron_spear',
  'simplyswords:gold_spear',
  'simplyswords:diamond_spear',
  'create_sa:vault_component_recipe',
  'culturalrecipes:corn_dough',
  'farmersdelight:bread_from_smelting',
  'farmersdelight:bread_from_smoking',
  'hazennstuff:smelting/blasting/raw_zenalite_from_blasting',
  'minecraft:cake',
  'handcrafted:terracotta_thin_pot',

  'refinedstorage_quartz_arsenal:wireless_crafting_grid',

  'hazennstuff:crafting/curios/galvanized_sheath',
  'hazennstuff:crafting/curios/scroll_sheath',

  'createaddition:charging/electrify_gold_ingot',
  'catburger:cat_burger',
  'cataclysm:belt_of_beginner',
  'apotheosis:gem_case',

  "createbigcannons:mixing/alloy_steel",
  "create_dragons_plus:freezing/breeze_rod_from_blaze_rod"
];

// === REMOVE BY MOD ID ===
const removeByMod = [
  'endrem',
  'armoroftheages'
];

// === REMOVE BY INPUT ===
const removeByInput = [
  // 'minecraft:cobblestone'
];

// === REMOVE BY OUTPUT ===
const removeByOutput = [
  // 'minecraft:stone_sword'
];

// === REMOVE BY TAG ===
const removeByTag = [
  // '#forge:ingots/iron',
  // '#minecraft:logs'
];

ServerEvents.recipes(event => {
  // Remove by ID
  removeRecipesById.forEach(id => event.remove({id: id}));
  global.REMOVE_ITEMS.forEach(id => event.remove({id: id}));

  // Remove by mod ID
  removeByMod.forEach(modid => event.remove({ mod: modid }));

  // Remove by input only
  //removeByInput.forEach(item => event.remove({ input: item }));

  // Remove by output only
  //removeByOutput.forEach(item => event.remove({ output: item }));

  // Remove by tag
  /*removeByTag.forEach(tag => {
    event.remove({ input: tag });
    event.remove({ output: tag });
  });*/
});