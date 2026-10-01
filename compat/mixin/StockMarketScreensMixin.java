package org.videcraft.mixin;

import org.spongepowered.asm.mixin.Mixin;

// Empty on purpose: it only makes VideCraftPlugin.postApply see these classes to translate their text
@Mixin(targets = {
    "by.deokma.stockmarket.neoforge.client.MarketMonitorScreen",
    "by.deokma.stockmarket.neoforge.client.ShopListScreen",
    "by.deokma.stockmarket.neoforge.client.TopSellersScreen",
    "by.deokma.stockmarket.neoforge.client.StockMarketScreen",
    "by.deokma.stockmarket.neoforge.client.FilterSidePanel",
    "by.deokma.stockmarket.neoforge.client.ShopFilterSidePanel",
    "by.deokma.stockmarket.neoforge.client.UIHelper",
    "by.deokma.stockmarket.neoforge.client.UIConstants$Coins",
})
abstract class StockMarketScreensMixin {
}
