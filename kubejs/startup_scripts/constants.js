// key — используется в ID фрагментов (kubejs:<key>_fragment_<type>), не менять
global.EYES = [
  { id: "endrem:wither_eye", key: "forgotten_eye", name: "Забытое око", gen: "Забытого ока", uiname: "§7Забытое око" },
  { id: "endrem:cursed_eye", key: "cursed_eye", name: "Проклятое око", gen: "Проклятого ока", uiname: "§5Проклятое око" },
  { id: "endrem:lost_eye", key: "lost_eye", name: "Потерянное око", gen: "Потерянного ока", uiname: "§4Потерянное око" },
  { id: "endrem:magical_eye", key: "lich_eye", name: "Око лича", gen: "Ока лича", uiname: "§bОко лича" },
  { id: "endrem:witch_eye", key: "omen_eye", name: "Око знамения", gen: "Ока знамения", uiname: "§dОко знамения" },
  { id: "endrem:exotic_eye", key: "gilded_eye", name: "Позолоченное око", gen: "Позолоченного ока", uiname: "§3Позолоченное око" },
  { id: "endrem:cryptic_eye", key: "cryptic_eye", name: "Загадочное око", gen: "Загадочного ока", uiname: "§aЗагадочное око" },
  { id: "endrem:old_eye", key: "oblivion_eye", name: "Око забвения", gen: "Ока забвения", uiname: "§eОко забвения" },
  { id: "endrem:evil_eye", key: "spy_eye", name: "Око соглядатая", gen: "Ока соглядатая", uiname: "§9Око соглядатая" },
  { id: "endrem:corrupted_eye", key: "corrupted_eye", name: "Осквернённое око", gen: "Осквернённого ока", uiname: "§2Осквернённое око" },
  { id: "endrem:black_eye", key: "black_eye", name: "Чёрное око", gen: "Чёрного ока", uiname: "§fЧёрное око" },
  { id: "endrem:nether_eye", key: "infernal_eye", name: "Адское око", gen: "Адского ока", uiname: "§6Адское око" }
];

// id — используется в ID фрагментов, name — отображаемое название
global.FRAGMENT_TYPES = [
  { id: 'core', name: 'Ядро' },
  { id: 'cracked', name: 'Расколотый фрагмент' },
  { id: 'shard', name: 'Осколок' }
]

global.EYES_CATA = [
  'cataclysm:storm_eye',
  'cataclysm:monstrous_eye',
  'cataclysm:mech_eye',
  'cataclysm:desert_eye',
  'cataclysm:void_eye',
]

global.REMOVE_ITEMS = [
  'moped:tiny_copper_moped_item',
  'irons_spellbooks:furled_map',
  'cataclysm:flame_eye',
  'cataclysm:abyss_eye',
  'cataclysm:cursed_eye',
  'endrem:cold_eye',
  'endrem:guardian_eye',
  'endrem:rogue_eye',
  'endrem:undead_eye',
  'apotheosis:potion_charm',
  'apotheosis:sigil_of_unnaming',
  'apotheosis:sigil_of_malice',
  'apothic_enchanting:infused_breath',
  'apotheosis:boss_summoner',
  'apothic_enchanting:hellshelf',
  'apothic_enchanting:infused_hellshelf',
  'apothic_enchanting:blazing_hellshelf',
  'apothic_enchanting:glowing_hellshelf',
  'apothic_enchanting:seashelf',
  'apothic_enchanting:infused_seashelf',
  'apothic_enchanting:crystal_seashelf',
  'apothic_enchanting:heart_seashelf',
  'apothic_enchanting:dormant_deepshelf',
  'apothic_enchanting:deepshelf',
  'apothic_enchanting:echoing_deepshelf',
  'apothic_enchanting:soul_touched_deepshelf',  
  'apothic_enchanting:echoing_sculkshelf',
  'apothic_enchanting:soul_touched_sculkshelf',
  'apothic_enchanting:endshelf',
  'apothic_enchanting:pearl_endshelf',
  'apothic_enchanting:draconic_endshelf',   
  'apothic_enchanting:beeshelf',
  'apothic_enchanting:melonshelf',
  'apothic_enchanting:stoneshelf',
  'apothic_enchanting:sightshelf',
  'apothic_enchanting:sightshelf_t2',
  'apothic_enchanting:treasure_shelf',
  'apothic_enchanting:geode_shelf',
  'apothic_enchanting:helmet_tome',
  'apothic_enchanting:chestplate_tome',
  'apothic_enchanting:leggings_tome',
  'apothic_enchanting:boots_tome',
  'apothic_enchanting:weapon_tome',
  'apothic_enchanting:bow_tome',
  'apothic_enchanting:pickaxe_tome',
  'apothic_enchanting:fishing_tome',
  'apothic_enchanting:other_tome',
  'apothic_enchanting:extraction_tome',
  'apothic_enchanting:scrap_tome',
  'apothic_enchanting:improved_scrap_tome',
  'apothic_enchanting:inert_trident',
  'apothic_enchanting:warden_tendril',
  'apothic_enchanting:flimsy_ender_lead',
  'apothic_enchanting:ender_lead',
  'apothic_enchanting:occult_ender_lead',
   'apotheosis:ender_gem_case',

  'gamediscs:redstone_circuit', 
  'gamediscs:processor', 
  'gamediscs:battery', 
  'gamediscs:display', 
  'gamediscs:control_pad', 
  'irons_spellbooks:wayward_compass',
  'magic_coins:prosperity_amulet',

  'alshanex_familiars:illusionist_shard',

  'minecraft:suspicious_sand',
  'minecraft:suspicious_gravel',
  'supplementaries:suspicious_gravel_bricks',
  'ftbfiltersystem:smart_filter',

    // shards with no recipe btw- allow it if patched by mod
  'alshanex_familiars:bard_shard',
  'alshanex_familiars:cleric_shard',
  'alshanex_familiars:necromancer_shard',
  'alshanex_familiars:plague_shard',
  'alshanex_familiars:scorcher_shard',
  'alshanex_familiars:dragon_warrior_shard',
  
  // stuff
  'createmechanisms:zinc_mechanism',
  'createmechanisms:computing_mechanism',
  'createmechanisms:redstone_mechanism',
  'createmechanisms:basic_energy_mechanism',
  'createmechanisms:iron_energy_mechanism',
  'createmechanisms:golden_energy_mechanism',
  'createmechanisms:diamond_energy_mechanism',
  'createmechanisms:enderiam_energy_mechanism',
  'createmechanisms:random_placer',
  'createmechanisms:bronze',
  'createmechanisms:energy_cell',
  'createmechanisms:enderiam_cell',

  // no recipes - no animations
   "hazennstuff:provocation_dormant",
  "hazennstuff:umbranova_dormant",
  "hazennstuff:devastator_dormant",
  "hazennstuff:ionic_splitter_dormant",
  "hazennstuff:ionic_splitter_t1",
  "hazennstuff:ionic_splitter_t2",
  "hazennstuff:ionic_splitter_t3",
  "hazennstuff:steel_ingot",
  "hazennstuff:steel_nugget"
 


]

