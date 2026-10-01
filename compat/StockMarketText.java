package org.videcraft;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import net.minecraft.client.resources.language.I18n;

// Create: Stock Market draws hardcoded English text, the plugin routes those literals through here
public final class StockMarketText {
    private static final Map<String, String> KEYS = new ConcurrentHashMap<>();

    private StockMarketText() {
    }

    public static String tr(String text) {
        var key = KEYS.computeIfAbsent(text, StockMarketText::key);
        return I18n.exists(key) ? I18n.get(key) : text;
    }

    private static String key(String text) {
        // Color codes stay in the key so "§cSELL" and the "SELL" used in filters never collide
        var name = text.replaceAll("[^A-Za-z0-9]+", "_").replaceAll("^_+|_+$", "");
        return "stockmarket.videcraft." + name;
    }
}
