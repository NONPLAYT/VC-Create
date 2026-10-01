// Currency: Create: Numismatics. 1 spur = 1 old silver coin.
// Magic Coins and SG Economy are kept only to migrate old coins and wallet balances, drop them in a later release.

const SGEconomyApi = Java.loadClass('net.sirgrantd.sg_economy.api.SGEconomyApi')

const OLD_COIN_VALUES = {
  'magic_coins:silver_coin': 1,
  'magic_coins:gold_coin': 50,
  'magic_coins:crystal_coin': 2500,
}

const COINS = [
  ['numismatics:sun', 4096],
  ['numismatics:crown', 512],
  ['numismatics:cog', 64],
  ['numismatics:sprocket', 16],
  ['numismatics:bevel', 8],
  ['numismatics:spur', 1],
]

function giveSpurs(player, spurs) {
  COINS.forEach(([id, value]) => {
    const count = Math.floor(spurs / value)
    spurs -= count * value
    if (count > 0) player.give(Item.of(id, count))
  })
}

// Takes old coins out of a container and returns their value in spurs
function takeOldCoins(container) {
  let spurs = 0
  for (let i = 0; i < container.getContainerSize(); i++) {
    const stack = container.getItem(i)
    const value = OLD_COIN_VALUES[stack.id]
    if (value) {
      spurs += value * stack.count
      container.setItem(i, Item.empty)
    }
  }
  return spurs
}

function migrateCoins(player) {
  const economy = SGEconomyApi.get()
  const wallet = Math.floor(economy.getBalance(player))
  if (wallet > 0) economy.setBalance(player, 0)

  const spurs = wallet + takeOldCoins(player.inventory) + takeOldCoins(player.enderChestInventory)
  if (spurs <= 0) return

  giveSpurs(player, spurs)
  player.tell(Text.gold(`Магические монеты обменяны на монеты Numismatics: ${spurs} шпор.`))
}

PlayerEvents.loggedIn(event => migrateCoins(event.player))

// Old coins still lie in chests and backpacks, convert them once they reach the inventory
PlayerEvents.inventoryChanged(event => {
  if (!OLD_COIN_VALUES[event.item.id]) return
  const player = event.player
  player.server.scheduleInTicks(1, () => migrateCoins(player))
})

ServerEvents.recipes(event => {
  // Change coins in a crafting grid
  const exchange = [
    ['numismatics:spur', 'numismatics:bevel', 8],
    ['numismatics:bevel', 'numismatics:sprocket', 2],
    ['numismatics:sprocket', 'numismatics:cog', 4],
    ['numismatics:cog', 'numismatics:crown', 8],
    ['numismatics:crown', 'numismatics:sun', 8],
  ]
  exchange.forEach(([small, big, count]) => {
    const smallName = small.split(':')[1]
    const bigName = big.split(':')[1]
    event.shapeless(big, Array(count).fill(small)).id(`kubejs:coins/${bigName}_from_${smallName}`)
    event.shapeless(Item.of(small, count), [big]).id(`kubejs:coins/${smallName}_from_${bigName}`)
  })
})
