Platform.mods.kubejs.name = 'VideCraft: Create'

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.displayName = 'VideCraft: Create';
});

//Stack Sizes
ItemEvents.modification(event => {
    event.modify('minecraft:ender_pearl', item => {
      item.maxStackSize = 64
    })
    event.modify('minecraft:egg', item => {
        item.maxStackSize = 64
    })
    event.modify('deeperdarker:heart_of_the_deep', item => {
        item.maxStackSize = 64
    })
})


function applyModifiers(event, itemId, slot, attributes) {
  const modifiers = attributes.reduce((mod, attr) => {
    return mod.withModifierAdded(attr.attribute, {
      amount: attr.amount,
      id: attr.id,
      operation: attr.operation,
    }, slot);
  }, Item.of(itemId).attributeModifiers);

  event.modify(itemId, item => {
    item.setAttributeModifiersWithTooltip(modifiers.modifiers());
  });
}

ItemEvents.modification(event => {
  global.EYES.forEach(eye => {
    event.modify(eye.id, item => {
      item.rarity = 'EPIC'
    });
  });

  // Head
  applyModifiers(event, 'armoroftheages:holy_armor_head', 'head', [
    { attribute: 'generic.armor', amount: 1, id: 'end:holy_head_armor_bonus', operation: 'add_value' },
    { attribute: 'generic.armor_toughness', amount: 4, id: 'end:holy_head_toughness_bonus', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:japanese_light_armor_head', 'head', [
    { attribute: 'generic.attack_damage', amount: 1, id: 'end:jap_head_attack', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:centurion_armor_head', 'head', [
    { attribute: 'apothic_attributes:crit_chance', amount: 0.05, id: 'end:cen_head_crit', operation: 'add_value' },
    { attribute: 'apothic_attributes:crit_damage', amount: 0.1, id: 'end:cen_head_critdamage', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:quetzalcoatl_armor_head', 'head', [
    { attribute: 'generic.max_health', amount: 0.1, id: 'end:q_head_maxh', operation: 'add_multiplied_base' },
    { attribute: 'generic.movement_speed', amount: 0.05, id: 'end:q_head_move', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:anubis_armor_head', 'head', [
    { attribute: 'generic.armor', amount: 3, id: 'end:anubis_head_armor_bonus', operation: 'add_value' },
    { attribute: 'generic.armor_toughness', amount: 3, id: 'end:anubis_head_toughness_bonus', operation: 'add_value' },
    { attribute: 'generic.attack_damage', amount: 2, id: 'end:anubis_head_attack', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:bamboo_hat', 'head', [
    { attribute: 'combat_roll:count', amount: 1, id: 'end:bamboo_hat1', operation: 'add_value' },
    { attribute: 'combat_roll:recharge', amount: 0.3, id: 'end:bamboo_hat2', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'cataclysm:bone_reptile_helmet', 'head', [
    { attribute: 'generic.attack_damage', amount: 2, id: 'end:bone_head_attack', operation: 'add_value' },
  ]);
  applyModifiers(event, 'cataclysm:ignitium_helmet', 'head', [
    { attribute: 'irons_spellbooks:spell_power', amount: 0.1, id: 'end:ignis_head_sp', operation: 'add_multiplied_base' },
    { attribute: 'irons_spellbooks:max_mana', amount: 150, id: 'end:ignis_head_manap', operation: 'add_value' },
  ]);
  applyModifiers(event, 'cataclysm:cursium_helmet', 'head', [
    { attribute: 'apothic_attributes:ghost_health', amount: 2, id: 'end:cursium_head_overh', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:raijin_armor_head', 'head', [
    { attribute: 'combat_roll:count', amount: 1, id: 'end:raijin_armor_head1', operation: 'add_value' },
    { attribute: 'combat_roll:distance', amount: 0.1, id: 'end:raijin_armor_head2', operation: 'add_multiplied_base' },
    { attribute: 'combat_roll:recharge', amount: 0.1, id: 'end:raijin_armor_head3', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:o_yoroi_armor_head', 'head', [
    { attribute: 'apothic_attributes:crit_damage', amount: 0.3, id: 'end:oyoroi_armor_head_crit', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:exalted_aurum_armor_head', 'head', [
    { attribute: 'apothic_attributes:experience_gained', amount: 0.25, id: 'end:exalted_aurum_armor_head_exp', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:pharaoh_armor_head', 'head', [
    { attribute: 'apothic_attributes:draw_speed', amount: 0.18, id: 'end:speed_armor_head_exp', operation: 'add_multiplied_base' },
    { attribute: 'apothic_attributes:arrow_damage', amount: 0.15, id: 'end:arrow_damage_armor_head_exp', operation: 'add_multiplied_base' },
    { attribute: 'apothic_attributes:arrow_velocity', amount: 0.20, id: 'end:arrow_velocity_armor_head_exp', operation: 'add_multiplied_base' },
    { attribute: 'generic.movement_speed', amount: 0.05, id: 'end:speed_damage_armor_head_exp', operation: 'add_multiplied_base' },
  ]);
  
 

  // Chest
  applyModifiers(event, 'armoroftheages:holy_armor_chest', 'chest', [
    { attribute: 'generic.armor', amount: 0, id: 'end:holy_chest_armor_bonus', operation: 'add_value' },
    { attribute: 'generic.armor_toughness', amount: 5, id: 'end:holy_chest_toughness_bonus', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:japanese_light_armor_chest', 'chest', [
    { attribute: 'generic.attack_damage', amount: 1, id: 'end:jap_chest_attack', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:centurion_armor_chest', 'chest', [
    { attribute: 'apothic_attributes:crit_chance', amount: 0.05, id: 'end:cen_chest_crit', operation: 'add_value' },
    { attribute: 'apothic_attributes:crit_damage', amount: 0.1, id: 'end:cen_chest_critdamage', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:quetzalcoatl_armor_chest', 'chest', [
    { attribute: 'generic.max_health', amount: 0.1, id: 'end:cq_che_maxh', operation: 'add_multiplied_base' },
    { attribute: 'generic.movement_speed', amount: 0.05, id: 'end:q_che_move', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:anubis_armor_chest', 'chest', [
    { attribute: 'generic.armor', amount: 4, id: 'end:anubis_chest_armor_bonus', operation: 'add_value' },
    { attribute: 'generic.armor_toughness', amount: 3, id: 'end:anubis_chest_toughness_bonus', operation: 'add_value' },
    { attribute: 'generic.attack_damage', amount: 2, id: 'end:anubis_chest_attack', operation: 'add_value' },
  ]);
  applyModifiers(event, 'cataclysm:bone_reptile_chestplate', 'chest', [
    { attribute: 'apothic_attributes:crit_chance', amount: 0.15, id: 'end:cen_chest_crit', operation: 'add_value' },
    { attribute: 'apothic_attributes:crit_damage', amount: 0.50, id: 'end:cen_chest_critdamage', operation: 'add_value' },
  ]);    
  applyModifiers(event, 'cataclysm:ignitium_chestplate', 'chest', [
    { attribute: 'irons_spellbooks:spell_power', amount: 0.1, id: 'end:ignis_chest_sp', operation: 'add_multiplied_base' },
    { attribute: 'irons_spellbooks:max_mana', amount: 150, id: 'end:ignis_chest_manap', operation: 'add_value' },
  ]);  
  applyModifiers(event, 'cataclysm:ignitium_elytra_chestplate', 'chest', [
    { attribute: 'irons_spellbooks:spell_power', amount: 0.1, id: 'xend:ignis_chest_sp', operation: 'add_multiplied_base' },
    { attribute: 'irons_spellbooks:max_mana', amount: 150, id: 'xend:ignis_chest_manap', operation: 'add_value' },
  ]);  
  applyModifiers(event, 'cataclysm:cursium_chestplate', 'chest', [
    { attribute: 'generic.max_health', amount: 0.1, id: 'end:cursium_chestplate_maxh', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:raijin_armor_chest', 'chest', [
    { attribute: 'combat_roll:count', amount: 1, id: 'end:raijin_armor_chest1', operation: 'add_value' },
    { attribute: 'combat_roll:distance', amount: 0.1, id: 'end:raijin_armor_chest2', operation: 'add_multiplied_base' },
    { attribute: 'combat_roll:recharge', amount: 0.1, id: 'end:raijin_armor_chest3', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:o_yoroi_armor_chest', 'chest', [
    { attribute: 'apothic_attributes:crit_damage', amount: 0.3, id: 'end:oyoroi_armor_chest_crit', operation: 'add_value' },
  ]);
    applyModifiers(event, 'armoroftheages:exalted_aurum_armor_chest', 'chest', [
    { attribute: 'apothic_attributes:experience_gained', amount: 0.25, id: 'end:exalted_aurum_armor_chest_exp', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:pharaoh_armor_chest', 'chest', [
    { attribute: 'apothic_attributes:draw_speed', amount: 0.18, id: 'end:speed_armor_chest_exp', operation: 'add_multiplied_base' },
    { attribute: 'apothic_attributes:arrow_damage', amount: 0.15, id: 'end:arrow_damage_armor_chest_exp', operation: 'add_multiplied_base' },
    { attribute: 'apothic_attributes:arrow_velocity', amount: 0.20, id: 'end:arrow_velocity_armor_chest_exp', operation: 'add_multiplied_base' },
    { attribute: 'generic.movement_speed', amount: 0.05, id: 'end:speed_damage_armor_chest_exp', operation: 'add_multiplied_base' },
  ]);

  // Legs
  applyModifiers(event, 'armoroftheages:holy_armor_legs', 'legs', [
    { attribute: 'generic.armor', amount: 0, id: 'end:holy_legs_armor_bonus', operation: 'add_value' },
    { attribute: 'generic.armor_toughness', amount: 5, id: 'end:holy_legs_toughness_bonus', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:japanese_light_armor_legs', 'legs', [
    { attribute: 'generic.attack_damage', amount: 1, id: 'end:jap_legs_attack', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:centurion_armor_legs', 'legs', [
    { attribute: 'apothic_attributes:crit_chance', amount: 0.05, id: 'end:cen_legs_crit', operation: 'add_value' },
    { attribute: 'apothic_attributes:crit_damage', amount: 0.1, id: 'end:cen_legs_critdamage', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:quetzalcoatl_armor_legs', 'legs', [
    { attribute: 'generic.max_health', amount: 0.1, id: 'end:q_legs_maxh', operation: 'add_multiplied_base' },
    { attribute: 'generic.movement_speed', amount: 0.05, id: 'end:q_legs_move', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:anubis_armor_legs', 'legs', [
    { attribute: 'generic.armor', amount: 4, id: 'end:anubis_legs_armor_bonus', operation: 'add_value' },
    { attribute: 'generic.armor_toughness', amount: 3, id: 'end:anubis_legs_toughness_bonus', operation: 'add_value' },
    { attribute: 'generic.attack_damage', amount: 2, id: 'end:anubis_legs_attack', operation: 'add_value' },
  ]);  
  applyModifiers(event, 'cataclysm:ignitium_leggings', 'legs', [
    { attribute: 'irons_spellbooks:spell_power', amount: 0.1, id: 'end:ignis_legst_sp', operation: 'add_multiplied_base' },
    { attribute: 'irons_spellbooks:max_mana', amount: 150, id: 'end:ignis_legst_manap', operation: 'add_value' },
  ]);   
  applyModifiers(event, 'cataclysm:cursium_leggings', 'legs', [
    { attribute: 'generic.attack_speed', amount: 0.1, id: 'end:cursium_legs_atksped', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:raijin_armor_legs', 'legs', [
    { attribute: 'combat_roll:count', amount: 1, id: 'end:raijin_armor_legs1', operation: 'add_value' },
    { attribute: 'combat_roll:distance', amount: 0.1, id: 'end:raijin_armor_legs2', operation: 'add_multiplied_base' },
    { attribute: 'combat_roll:recharge', amount: 0.1, id: 'end:raijin_armor_legs3', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:o_yoroi_armor_legs', 'legs', [
    { attribute: 'apothic_attributes:crit_damage', amount: 0.3, id: 'end:oyoroi_armor_legs_crit', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:exalted_aurum_armor_legs', 'legs', [
    { attribute: 'apothic_attributes:experience_gained', amount: 0.25, id: 'end:exalted_aurum_armor_legs_exp', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:pharaoh_armor_legs', 'legs', [
    { attribute: 'apothic_attributes:draw_speed', amount: 0.18, id: 'end:speed_armor_legs_exp', operation: 'add_multiplied_base' },
    { attribute: 'apothic_attributes:arrow_damage', amount: 0.15, id: 'end:arrow_damage_armor_legs_exp', operation: 'add_multiplied_base' },
    { attribute: 'apothic_attributes:arrow_velocity', amount: 0.20, id: 'end:arrow_velocity_armor_legs_exp', operation: 'add_multiplied_base' },
    { attribute: 'generic.movement_speed', amount: 0.05, id: 'end:speed_damage_armor_legs_exp', operation: 'add_multiplied_base' },
  ]);

  // Boots
  applyModifiers(event, 'armoroftheages:holy_armor_feet', 'feet', [
    { attribute: 'generic.armor', amount: 1, id: 'end:holy_boots_armor_bonus', operation: 'add_value' },
    { attribute: 'generic.armor_toughness', amount: 4, id: 'end:holy_boots_toughness_bonus', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:japanese_light_armor_feet', 'feet', [
    { attribute: 'generic.attack_damage', amount: 1, id: 'end:jap_feet_attack', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:centurion_armor_feet', 'feet', [
    { attribute: 'apothic_attributes:crit_chance', amount: 0.05, id: 'end:cen_feet_crit', operation: 'add_value' },
    { attribute: 'apothic_attributes:crit_damage', amount: 0.1, id: 'end:cen_feet_critdamage', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:quetzalcoatl_armor_feet', 'feet', [
    { attribute: 'generic.max_health', amount: 0.1, id: 'end:q_feet_maxh', operation: 'add_multiplied_base' },
    { attribute: 'generic.movement_speed', amount: 0.05, id: 'end:q_feet_move', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:anubis_armor_feet', 'feet', [
    { attribute: 'generic.armor', amount: 3, id: 'end:anubis_feet_armor_bonus', operation: 'add_value' },
    { attribute: 'generic.armor_toughness', amount: 3, id: 'end:anubis_feet_toughness_bonus', operation: 'add_value' },
    { attribute: 'generic.attack_damage', amount: 2, id: 'end:anubis_feet_attack', operation: 'add_value' },
  ]);  
  applyModifiers(event, 'cataclysm:ignitium_boots', 'feet', [
    { attribute: 'irons_spellbooks:spell_power', amount: 0.1, id: 'end:ignis_feet_sp', operation: 'add_multiplied_base' },
    { attribute: 'irons_spellbooks:max_mana', amount: 150, id: 'end:ignis_feet_manap', operation: 'add_value' },
  ]);  
  applyModifiers(event, 'cataclysm:cursium_boots', 'legs', [
    { attribute: 'generic.movement_speed', amount: 0.15, id: 'end:cursium_feetsped', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:raijin_armor_feet', 'feet', [
    { attribute: 'combat_roll:count', amount: 1, id: 'end:raijin_armor_feet1', operation: 'add_value' },
    { attribute: 'combat_roll:distance', amount: 0.1, id: 'end:raijin_armor_feet2', operation: 'add_multiplied_base' },
    { attribute: 'combat_roll:recharge', amount: 0.1, id: 'end:raijin_armor_feet3', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:o_yoroi_armor_feet', 'feet', [
    { attribute: 'apothic_attributes:crit_damage', amount: 0.3, id: 'end:oyoroi_armor_feet_crit', operation: 'add_value' },
  ]);
  applyModifiers(event, 'armoroftheages:exalted_aurum_armor_feet', 'feet', [
    { attribute: 'apothic_attributes:experience_gained', amount: 0.25, id: 'end:exalted_aurum_armor_feetexp', operation: 'add_multiplied_base' },
  ]);
  applyModifiers(event, 'armoroftheages:pharaoh_armor_feet', 'feet', [
    { attribute: 'apothic_attributes:draw_speed', amount: 0.18, id: 'end:speed_armor_feet_exp', operation: 'add_multiplied_base' },
    { attribute: 'apothic_attributes:arrow_damage', amount: 0.15, id: 'end:arrow_damage_armor_feet_exp', operation: 'add_multiplied_base' },
    { attribute: 'apothic_attributes:arrow_velocity', amount: 0.20, id: 'end:arrow_velocity_armor_feet_exp', operation: 'add_multiplied_base' },
    { attribute: 'generic.movement_speed', amount: 0.05, id: 'end:speed_damage_armor_feet_exp', operation: 'add_multiplied_base' },
  ]);
});

StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model has to be placed kubejs/assets/kubejs/models/item/test_item.json
  /*
  event.create('kubejs:village_capacity_permit').maxStackSize(1)*/
  //event.create('create_chronicles').displayName("§6Create Chronicles").texture('kubejs:item/example_item')
  //event.create('lootbag_boss').displayName("Loot bag of gems").texture('kubejs:item/example_item')

  global.EYES.forEach(eye => {
    global.FRAGMENT_TYPES.forEach(type => {
      const id = `${eye.key}_fragment_${type.id}` // e.g. forgotten_eye_fragment_core

      event.create(id)
        .displayName(`${type.name} ${eye.gen}`)
        .texture(`kubejs:item/fragments/${id}`)
        .tooltip(`Используется для создания ${eye.gen}`)
        .rarity('RARE')
    })
  })

  event.create('chromatic_compound').rarity("EPIC")
  event.create('token_basic').displayName("§7Жетон ученика").rarity("UNCOMMON")
  event.create('token_medium').displayName("§fЖетон оператора").rarity("RARE")
  event.create('token_advanced').displayName("§eЖетон инженера").rarity("EPIC")
  event.create('boss_token').displayName("§6Жетон босса").rarity("EPIC")
  
  event.create('heart_container')
    .displayName("§6Контейнер сердца")
    .rarity("EPIC")
    .tooltip('§7Навсегда увеличивает максимальное здоровье на §c+1 сердце§7.')



  //Farmer's Stuff
  event.create('incomplete_barbecue_stick')
  event.create('incomplete_cod_roll')
  event.create('incomplete_kelp_roll')
  event.create('incomplete_melon_popsicle')
  event.create('incomplete_mutton_wrap')
  event.create('incomplete_salmon_roll')
  event.create('incomplete_stuffed_potato')
  event.create('incomplete_bacon_and_eggs')
  event.create('incomplete_grilled_salmon')
  event.create('incomplete_rice_roll_medley_block')
  event.create('incomplete_roast_chicken_block')
  event.create('incomplete_roasted_mutton_chops')
  event.create('incomplete_shepherds_pie_block')
  event.create('incomplete_steak_and_potatoes')
})

StartupEvents.registry("block", (event) => {
  event.create('incomplete_blackstone')
})
