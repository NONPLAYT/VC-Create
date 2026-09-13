ServerEvents.recipes(event => {

  // Create Crafting Recipe of all the 12 eyes
  global.EYES.forEach(eye => {
    const fragments = [];
  
    global.FRAGMENT_TYPES.forEach(type => {
      fragments.push(`kubejs:${eye.key}_fragment_${type.id}`);
    });
  
    fragments.push('minecraft:ender_eye');
  
    event.shapeless(eye.id, fragments);
  });

  event.replaceInput({}, 'refurbished_furniture:dough', 'create:dough')
  event.replaceInput({}, 'farmersdelight:wheat_dough', 'create:dough')
  event.replaceInput({}, 'hazennstuff:steel_ingot', 'createbigcannons:steel_ingot')
  event.replaceOutput({}, 'hazennstuff:steel_ingot', 'createbigcannons:steel_ingot')
  event.remove({ input: 'hazennstuff:steel_nugget' })
  event.remove({ output: 'hazennstuff:steel_nugget' })

  event.replaceInput({id:'apotheosis:salvaging_table'}, 'apotheosis:gem_dust', 'minecraft:diamond_block')

  event.replaceInput({id:'crystal_chronicles:hemalite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:voidstone_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:divinite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:voltite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:floralite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:volcanite_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')
  event.replaceInput({id:'crystal_chronicles:ice_shard'}, 'minecraft:amethyst_shard', 'irons_spellbooks:divine_soulshard')

  event.replaceInput({id:'moped:copper_moped_item_recipe'}, 'minecraft:netherite_boots', 'create:belt_connector')
  event.replaceInput({id:'moped:copper_moped_item_recipe'}, '#minecraft:wool', 'create:copper_sheet')
  event.replaceInput({id:'moped:copper_moped_item_recipe'}, 'minecraft:cut_copper_slab', 'create:copper_sheet')
  event.replaceInput({id:'moped:copper_moped_item_recipe'}, 'minecraft:copper_block', '#create:seats')

  //conf
  event.replaceInput({id:'another_furniture:cherry_table'}, 'minecraft:cherry_planks', 'minecraft:cherry_slab')
  event.replaceInput({id:'another_furniture:warped_table'}, 'minecraft:warped_planks', 'minecraft:warped_slab')
  event.replaceInput({id:'another_furniture:spruce_table'}, 'minecraft:spruce_planks', 'minecraft:spruce_slab')
  event.replaceInput({id:'another_furniture:acacia_table'}, 'minecraft:acacia_planks', 'minecraft:acacia_slab')
  event.replaceInput({id:'another_furniture:bamboo_table'}, 'minecraft:bamboo_planks', 'minecraft:bamboo_slab')
  event.replaceInput({id:'another_furniture:jungle_table'}, 'minecraft:jungle_planks', 'minecraft:jungle_slab')
  event.replaceInput({id:'another_furniture:mangrove_table'}, 'minecraft:mangrove_planks', 'minecraft:mangrove_slab')
  event.replaceInput({id:'another_furniture:dark_oak_table'}, 'minecraft:dark_oak_planks', 'minecraft:dark_oak_slab')
  event.replaceInput({id:'another_furniture:crimson_table'}, 'minecraft:crimson_planks', 'minecraft:crimson_slab')
  event.replaceInput({id:'another_furniture:birch_table'}, 'minecraft:birch_planks', 'minecraft:birch_slab')
  event.replaceInput({id:'another_furniture:oak_table'}, 'minecraft:oak_planks', 'minecraft:oak_slab')
  event.replaceInput({id:'handcrafted:wood_plate'}, '#minecraft:wooden_slabs', '#minecraft:wooden_pressure_plates')

  // Big Cannons Stuff

  
  event.smoking('minecraft:andesite', 'minecraft:gravel').cookingTime(6000)
  event.smoking('minecraft:leather', 'minecraft:rotten_flesh').cookingTime(900)

  event.custom({
    "type": "mechanical_botany:insolating",
    "ingredients": [
      {
        "type": "fluid_stack",
        "amount": 250,
        "fluid": "eternal_starlight:ether"
      },
      {
        "item": "eternal_starlight:lunaris_cactus"
      }
    ],
    "processing_time": 3200,
    "results": [
      {
        "count": 2,
        "id": "eternal_starlight:lunaris_cactus_fruit"
      },
      {
        "count": 1,
        "id": "eternal_starlight:lunaris_cactus"
      }
    ]
  })

  event.custom({
    "type": "create_enchantment_industry:grinding",
    "ingredients": [
      {
        "item": "minecraft:redstone"
      }
    ],
    "results": [
      {
        "amount": 120,
        "id": "kubejs:fluid_redstone"
      }
    ]
  })

  event.custom({
    "type": "create_enchantment_industry:grinding",
    "ingredients": [
      {
        "item": "minecraft:ender_pearl"
      }
    ],
    "results": [
      {
        "amount": 750,
        "id": "createmechanisms:enderiam"
      },
      {
        "amount": 1,
        "id": "garnished:crushed_ender_pearl"
      }
    ]
  })

/*   event.custom({
    "type": "create_enchantment_industry:grinding",
    "ingredients": [
      {
        "item": "create:limestone"
      }
    ],
    "results": [
      {
        "amount": 1,
        "id": "create_enchantment_industry:experience"
      },
      {
        "amount": 1,
        "id": "garnished:crushed_salt"
      }
    ]
  })
 */

/*   event.custom({
    "type": "createaddition:charging",
    "energy": 4000,
    "ingredients": [
      {
        "item": "minecraft:copper_ingot"
      }
    ],
    "max_charge_rate": 200,
    "results": [
      {
        "id": "createmechanisms:bronze"
      }
    ]
  }) */

  event.custom({
    "type": "createaddition:charging",
    "energy": 10000,
    "ingredients": [
      {
        "item": "minecraft:diamond"
      }
    ],
    "max_charge_rate": 200,
    "results": [
      {
        "id": "create_new_age:overcharged_diamond"
      }
    ]
  })

  event.custom({
    "type": "createaddition:charging",
    "energy": 2000,
    "ingredients": [
      {
        "item": "create:golden_sheet"
      }
    ],
    "max_charge_rate": 200,
    "results": [
      {
        "id": "create_new_age:overcharged_golden_sheet"
      }
    ]
  })

  event.custom({
    "type": "createaddition:charging",
    "energy": 2000,
    "ingredients": [
      {
        "item": "minecraft:gold_ingot"
      }
    ],
    "max_charge_rate": 200,
    "results": [
      {
        "id": "create_new_age:overcharged_gold"
      }
    ]
  })

  event.custom({
    "type": "createaddition:charging",
    "energy": 50000,
    "ingredients": [
      {
        "item": "minecraft:glass_bottle"
      }
    ],
    "max_charge_rate": 200,
    "results": [
      {
        "id": "minecraft:experience_bottle"
      }
    ]
  })

  event.custom({
    "type": "createaddition:charging",
    "energy": 1000,
    "ingredients": [
      {
        "item": "minecraft:iron_ingot"
      }
    ],
    "max_charge_rate": 200,
    "results": [
      {
        "id": "create_new_age:overcharged_iron"
      }
    ]
  })

  event.custom({
    "type": "createaddition:charging",
    "energy": 1000,
    "ingredients": [
      {
        "item": "create:iron_sheet"
      }
    ],
    "max_charge_rate": 200,
    "results": [
      {
        "id": "create_new_age:overcharged_iron_sheet"
      }
    ]
  })

  event.custom({
    "type": "create_new_age:energising",
    "energy_needed": 4000,
    "ingredients": [
      {
        "item": "minecraft:copper_ingot"
      }
    ],
    "results": [
      {
        "id": "createmechanisms:bronze"
      }
    ]
  })
  event.custom({
    "type": "create_new_age:energising",
    "energy_needed": 4000,
    "ingredients": [
      {
        "item": "minecraft:gold_nugget"
      }
    ],
    "results": [
      {
        "id": "createaddition:electrum_nugget"
      }
    ]
  })
  // Simply Swords book
  event.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "minecraft:book"
      },
      {
        "item": "simplyswords:runic_tablet"
      }
    ],
    "result": {
      "id": "patchouli:guide_book",
      "components": {
        "patchouli:book": "simplyswords:runic_grimoire"
      },
      "count": 1
    }
  });

  event.custom({
    "type": "createaddition:liquid_burning",
    "burn_time": 3380,
    "ingredients": [
      {
        "type": "fluid_tag",
        "amount": 1000,
        "fluid_tag": "garnished:peanut_oil"
      }
    ],
    "results": [],
    "superheated": true
  })

  event.shaped('2x create:belt_connector', [
      '   ',
      'SSS',
      'SSS'
  ], {
      S: 'createmechanisms:cured_rubber',
  })
  
  event.shaped('createmechanisms:iron_saw', [
      'A  ',
      ' A ',
      '  C'
  ], {
      C: '#minecraft:wooden_slabs',
      A: 'minecraft:iron_ingot',
  })
  event.shaped('createmechanisms:copper_saw', [
      'A  ',
      ' A ',
      '  C'
  ], {
      C: '#minecraft:wooden_slabs',
      A: 'minecraft:copper_ingot',
  })  
  event.shaped('createmechanisms:diamond_saw', [
      'A  ',
      ' A ',
      '  C'
  ], {
      C: '#minecraft:wooden_slabs',
      A: 'minecraft:diamond',
  })      
  event.smoking('createmechanisms:cured_rubber', 'createmechanisms:rubber').cookingTime(200)


  // Recipe conflicts
  event.shaped('create_sa:vault_component', [
      ' B ',
      ' A ',
      '   '
  ], {
      B: '#create:toolboxes',
      A: 'create:item_vault',
  })
  
  event.shaped('create_sa:small_filling_tank', [
      ' B ',
      ' A ',
      '   '
  ], {
      B: 'create_sa:hydraulic_engine',
      A: 'create:fluid_tank',
  })
  
  event.shaped('multibeds:feather_pile', [
      'SS ',
      'SS ',
      'SS '
  ], {
      S: 'minecraft:feather',
  })  
  event.shapeless('6x minecraft:feather', 'multibeds:feather_pile');

  event.shaped('simplyswords:iron_spear', [
      ' CB',
      ' AC',
      'A  '
  ], {
      A: 'minecraft:stick',
      B: 'minecraft:iron_ingot',
      C: 'minecraft:iron_nugget',
  })   

  event.shaped('simplyswords:gold_spear', [
      ' CB',
      ' AC',
      'A  '
  ], {
      A: 'minecraft:stick',
      B: 'minecraft:gold_ingot',
      C: 'minecraft:gold_nugget',
  })   

  event.shaped('simplyswords:diamond_spear', [
      ' CB',
      ' AC',
      'A  '
  ], {
      A: 'minecraft:stick',
      B: 'minecraft:diamond',
      C: 'createaddition:diamond_grit',
  }) 

  event.shaped('handcrafted:terracotta_thin_pot', [
      ' A ',
      ' A ',
      ' A '
  ], {
      A: 'minecraft:terracotta',
  })

  // weird bug idk why lost recipe with kubejson
  /*event.smithing(
    'alshanex_familiars:bard_helmet',
    'alshanex_familiars:sound_rune',
    'irons_spellbooks:wizard_helmet',
    'irons_spellbooks:arcane_essence'
  )

  event.smithing(
    'alshanex_familiars:bard_chestplate',
    'alshanex_familiars:sound_rune',
    'irons_spellbooks:wizard_chestplate',
    'irons_spellbooks:arcane_essence'
  )  

  event.smithing(
    'alshanex_familiars:bard_leggings',
    'alshanex_familiars:sound_rune',
    'irons_spellbooks:wizard_leggings',
    'irons_spellbooks:arcane_essence'
  )  

  event.smithing(
    'alshanex_familiars:bard_boots',
    'alshanex_familiars:sound_rune',
    'irons_spellbooks:wizard_boots',
    'irons_spellbooks:arcane_essence'
  ) */      
});
