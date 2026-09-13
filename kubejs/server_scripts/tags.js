ServerEvents.tags('block', event => {
    event.add("ftbchunks:interact_whitelist", [
        'minecraft:crafting_table',
        '#minecraft:doors',
        '#minecraft:beds',
        "minecraft:bell",
        "create:desk_bell",
        'create_things_and_misc:card_reader',
        'refurbished_furniture:post_box',
        'create:contraption_controls',
        '#create:table_cloths',
        '#waystones:waystones',
        '#waystones:sharestones',
        '#lootr:containers',
        'farmingforblockheads:market',
    ]);

    const vents= [
        'molten_vents:dormant_molten_asurine',
        'molten_vents:active_molten_asurine',
        'molten_vents:dormant_molten_veridium',
        'molten_vents:active_molten_veridium',
        'molten_vents:dormant_molten_crimsite',
        'molten_vents:active_molten_crimsite',
        'molten_vents:dormant_molten_ochrum',
        'molten_vents:active_molten_ochrum',
    ]
    event.add("buildinggadgets2:deny", vents);
    event.add("forge:relocation_not_supported", vents);
})

ServerEvents.tags('item', event => {
    event.remove('c:ingots/steel', 'hazennstuff:steel_ingot');
    event.remove('c:ingots/bronze', 'createmechanisms:bronze');
    
    event.add("ftbchunks:right_click_whitelist", [
        'create:shopping_list',
    ]);  
    event.add("c:stripped_woods",[
        'hazennstuff:stripped_wisewood_wood',
        'biomeswevegone:stripped_palo_verde_wood',
        'deeperdarker:stripped_echo_wood',
        'garnished:stripped_nut_wood',
        'arts_and_crafts:stripped_cork_wood',
        'phantasm:stripped_pream_wood'
    ]);
/*     event.add("hazennstuff:armors/helmets", [
        'hazennstuff:miner_helmet',
        'hazennstuff:fireblossom_crown',
        'hazennstuff:spectral_spelunker_helmet',
        'hazennstuff:arbitrium_robes_helmet'
    ]);
    event.add("hazennstuff:armors/chestplates", [
        'hazennstuff:miner_chestplate',
        'hazennstuff:spectral_spelunker_chestplate',
        'hazennstuff:arbitrium_robes_chestplate'
    ]);
    event.add("hazennstuff:armors/leggings", [
        'hazennstuff:miner_leggings',
        'hazennstuff:spectral_spelunker_leggings',
        'hazennstuff:arbitrium_robes_leggings'
    ]);
    event.add("hazennstuff:armors/boots", [
        'hazennstuff:miner_boots',
        'hazennstuff:spectral_spelunker_boots',
        'hazennstuff:arbitrium_robes_boots'
    ]);
})

    ]); */
})
