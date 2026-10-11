package org.videcraft.mixin;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import net.minecraft.client.Minecraft;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.EquipmentSlot;
import net.minecraft.world.item.ArmorItem;
import net.minecraft.world.item.ArmorMaterial;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

// Punchy draws the chestplate sleeve on first-person arms with the vanilla layer textures, but GeckoLib and AzureLib armor
// (Iron's Spellbooks, Armor of the Ages, Hazen n Stuff) ships no *_layer_1.png, so the arm came out as the black missing texture.
// Those sets now keep the bare arm, vanilla-style armor still gets its sleeve
@Mixin(targets = "punchy.client.render.PunchyArmRenderer")
abstract class PunchyArmArmorMixin {
    @Unique
    private static final Map<ResourceLocation, Boolean> VIDECRAFT$TEXTURES = new ConcurrentHashMap<>();

    @Inject(method = "renderArmArmor", at = @At("HEAD"), cancellable = true)
    private static void videcraft$skipCustomArmor(CallbackInfo ci) {
        var player = Minecraft.getInstance().player;
        if (player != null && player.getItemBySlot(EquipmentSlot.CHEST).getItem() instanceof ArmorItem armor) {
            for (ArmorMaterial.Layer layer : armor.getMaterial().value().layers()) {
                if (!VIDECRAFT$TEXTURES.computeIfAbsent(layer.texture(false),
                    texture -> Minecraft.getInstance().getResourceManager().getResource(texture).isPresent())) {
                    ci.cancel();
                    return;
                }
            }
        }
    }
}
