// Hide Recipes
RecipeViewerEvents.removeEntriesCompletely('item', item =>{
  global.REMOVE_ITEMS.forEach(id => {
    item.remove(id)
  })

  const itemsToRemove = [
    'incomplete_barbecue_stick',
    'incomplete_cod_roll',
    'incomplete_kelp_roll',
    'incomplete_melon_popsicle',
    'incomplete_mutton_wrap',
    'incomplete_salmon_roll',
    'incomplete_stuffed_potato',
    'incomplete_bacon_and_eggs',
    'incomplete_grilled_salmon',
    'incomplete_rice_roll_medley_block',
    'incomplete_roast_chicken_block',
    'incomplete_roasted_mutton_chops',
    'incomplete_shepherds_pie_block',
    'incomplete_steak_and_potatoes',
    'incomplete_blackstone'
  ]

  itemsToRemove.forEach(id => {
    item.remove(`kubejs:${id}`)
  })
})

// Hide Categories 
RecipeViewerEvents.removeCategories(event => {
  event.remove('apothic_enchanting:enchanting')
  event.remove('ftbquests:loot_crate')
  event.remove('ftbquests:quest')
  event.remove('simplelootviewer:archaeology')
  event.remove('simplelootviewer:block')
  event.remove('simplelootviewer:dispenser')
  event.remove('simplelootviewer:fishing')
  event.remove('simplelootviewer:hero')
  event.remove('simplelootviewer:loot_chest')
  event.remove('simplelootviewer:misc')
})

RecipeViewerEvents.addInformation('item', item =>{
  let fromMarket="Покупается на рынке за жетоны босса"

  //other
  item.add("irons_spellbooks:decrepit_key", "Открывает хранилища Цитадели. Выпадает с босса Тайроса.")
  item.add("irons_spellbooks:pyrium_ingot", "Можно найти в хранилищах Цитадели.")
  item.add("hazennstuff:fireblossom", "Встречается в багровых лесах Незера.")
  item.add("irons_spellbooks:divine_soulshard", "Выпадает с Тайроса — босса 5-го уровня.")
 
  item.add("kubejs:forgotten_eye_fragment_core", "Выпадает с Хранителя")
  item.add("kubejs:forgotten_eye_fragment_shard", "Выпадает с скелета-иссушителя")
  item.add("kubejs:forgotten_eye_fragment_cracked", "Выпадает с Древнего стража")

  item.add("kubejs:cursed_eye_fragment_core", "Выпадает с Перчатки Незера")
  item.add("kubejs:cursed_eye_fragment_shard", "Выпадает с Незеритового чудища")
  item.add("kubejs:cursed_eye_fragment_cracked", "Выпадает с Мёртвого короля")

  item.add("kubejs:lost_eye_fragment_core", "Выпадает с Звездосветного голема")
  item.add("kubejs:lost_eye_fragment_shard", "Выпадает с Лунного чудовища")
  item.add("kubejs:lost_eye_fragment_cracked", "Выдаётся за квест «Пройди испытание Привратника»")

  item.add("kubejs:lich_eye_fragment_core", "Выпадает с Ночного лича")
  item.add("kubejs:lich_eye_fragment_shard", "Выпадает с Предвестника")
  item.add("kubejs:lich_eye_fragment_cracked", fromMarket)

  item.add("kubejs:omen_eye_fragment_core", "Выпадает с Эха Тайроса, Первого Огненосца")
  item.add("kubejs:omen_eye_fragment_shard", "Выпадает с Обсидилита")
  item.add("kubejs:omen_eye_fragment_cracked", "Выпадает с Цветка пустоты")

  item.add("kubejs:gilded_eye_fragment_core", "Выпадает с Левиафана")
  item.add("kubejs:gilded_eye_fragment_shard", "Выпадает с Древнего Ревенанта")
  item.add("kubejs:gilded_eye_fragment_cracked", "Выпадает с Сциллы")

  item.add("kubejs:cryptic_eye_fragment_core", "Выпадает с Игниса")
  item.add("kubejs:cryptic_eye_fragment_shard", "Выпадает с Маледиктуса")
  item.add("kubejs:cryptic_eye_fragment_cracked", fromMarket)

  item.add("simplyswords:soulstealer", "Выпадает с Мёртвого короля")
  item.add("simplyswords:wraithfang", "Выпадает с Мёртвого короля")
  item.add("simplyswords:chompolotl", "Выпадает с Мёртвого короля")

  item.add("simplyswords:brimstone_claymore", "Выпадает с Незеритового чудища")
  item.add("simplyswords:molten_edge", "Выпадает с Незеритового чудища")

  item.add("simplyswords:frostfall", "Выпадает с Перчатки Незера")
  item.add("simplyswords:watcher_claymore", "Выпадает с Перчатки Незера")

  item.add("simplyswords:emberlash", "Выпадает с Лунного чудовища")
  item.add("simplyswords:toxic_longsword", "Выпадает с Лунного чудовища")

  item.add("simplyswords:stormbringer", "Выпадает с Звездосветного голема")
  item.add("simplyswords:mjolnir", "Выпадает с Звездосветного голема")

  item.add("simplyswords:slumbering_lichblade", "Выпадает с Ночного лича")
  item.add("simplyswords:soulrender", "Выпадает с Ночного лича")

  item.add("simplyswords:emberblade", "Выпадает с Предвестника")
  item.add("simplyswords:ribboncleaver", "Выпадает с Предвестника")

  item.add("simplyswords:bramblethorn", "Выпадает с Цветка пустоты")
  item.add("simplyswords:twisted_blade", "Выпадает с Цветка пустоты")

  item.add("simplyswords:flamewind", "Выпадает с Обсидилита")
  item.add("simplyswords:watching_warglaive", "Выпадает с Обсидилита")

  item.add("simplyswords:tempest", "Выпадает с Эха Тайроса, Первого Огненосца")
  item.add("simplyswords:soulpyre", "Выпадает с Эха Тайроса, Первого Огненосца")

  item.add("simplyswords:whisperwind", "Выпадает с Древнего Ревенанта")
  item.add("simplyswords:waxweaver", "Выпадает с Древнего Ревенанта")

  item.add("simplyswords:hiveheart", "Выпадает с Левиафана")
  item.add("simplyswords:caelestis", "Выпадает с Левиафана")

  item.add("simplyswords:dormant_relic", "Выпадает с Сциллы")
  item.add("simplyswords:thunderbrand", "Выпадает с Сциллы")

  item.add("simplyswords:enigma", "Выпадает с Игниса")
  item.add("simplyswords:wickpiercer", "Выпадает с Игниса")

  item.add("simplyswords:storms_edge", "Выпадает с Маледиктуса")
  item.add("simplyswords:stars_edge", "Выпадает с Маледиктуса")

  item.add("simplyswords:hearthflame", "Выпадает с Эндер-дракона")
  item.add("simplyswords:soulkeeper", "Выпадает с Эндер-дракона")
  item.add("simplyswords:icewhisper", "Выпадает с Эндер-дракона")
  item.add("simplyswords:arcanethyst", "Выпадает с Эндер-дракона")
  item.add("simplyswords:shadowsting", "Выпадает с Эндер-дракона")
  item.add("simplyswords:livyatan", "Выпадает с Эндер-дракона")
  //34 total
  item.add("hazennstuff:overgrown_bone", "Выпадает с трясинных зомби")
  item.add("hazennstuff:excalibur_fragment", "Выпадает с Мёртвого короля")
  item.add("hazennstuff:pendant_of_harmony", "Встречается в городах Энда")

  item.add("garnished:vermilion_kelp", "Алую ламинарию можно найти в холодном или замёрзшем океане")
  item.add("garnished:bok_choy", "Бок-чой можно найти в храмах джунглей")

  // remove salt when fix recipe
  //item.add('garnished:crushed_salt',"You need to use Mechanical Grindstone using Limestone")
  
  item.add('biomeswevegone:yucca_fruit',"Юкка растёт на деревьях и встречается в биомах вроде пустошей и пустынь (и их вариаций).")
  item.add('eternal_starlight:lunaris_cactus_fruit',"Растёт на верхушке лунарисового кактуса. Встречается в биоме кристаллизованной пустыни, а также растёт на сумеречном песке в измерении Вечного звёздного света.")
  item.add('eternal_starlight:ether_bucket',"Встречается в измерении Вечного звёздного света.")
  item.add('minecraft:brown_mushroom',"Выращивается на искажённом или багровом нилии (можно фармить)")
})





// Language names
;['en_us', 'ru_ru'].forEach(lang => {
  ClientEvents.lang(lang, event => {
    global.EYES.forEach(eye => {
      event.renameItem(eye.id, eye.uiname);
    });
  });
});

let dics =[
  'gamediscs:game_disc_rabbit',
  'gamediscs:game_disc_flappy_bird',
  'gamediscs:game_disc_slime',
  'gamediscs:game_disc_blocktris',
  'gamediscs:game_disc_pong',
  'gamediscs:game_disc_froggie',
  'gamediscs:game_disc_tnt_sweeper',
]


// Tooltips with order
ItemEvents.modifyTooltips(event => {
  global.EYES.forEach((eye, index) => {
    event.modify(eye.id, tooltip => {
      tooltip.removeLine(1);
      tooltip.insert(1, Text.of(`#${index + 1} Используется для активации портала в Энд.`).color(0xFFA5F7));
    });
  });
  
  global.EYES_CATA.forEach((eye) => {
    event.modify(eye, tooltip => {
      tooltip.insert(1, Text.of("Не указывает путь к структуре — служит только для повторного призыва боссов.").red())
    })
  })

  dics.forEach((disc) => {
    event.modify(disc, tooltip => {
      tooltip.insert(1, Text.of('§7Чтобы поиграть, нужна игровая консоль.'))
    })
  })

  event.modify('kubejs:token_basic', tooltip => {
    tooltip.insert(1, Text.of('§7Ты сделал первые шаги, инженер.'))
    tooltip.insert(2, Text.of('§eПринимается в контрактах §lкатегории 1§r§e.'))
  })

  event.modify('kubejs:token_medium', tooltip => {
    tooltip.insert(1, Text.of('§7Точность — твой язык.'))
    tooltip.insert(2, Text.of('§eПринимается в контрактах §lкатегории 2§r§e.'))
  })

  event.modify('kubejs:token_advanced', tooltip => {
    tooltip.insert(1, Text.of('§7Машины подчиняются тебе как никому другому.'))
    tooltip.insert(2, Text.of('§eПринимается в контрактах §lкатегории 3§r§e.'))
  })
});
