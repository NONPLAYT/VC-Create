package org.videcraft.mixin;

import com.mojang.logging.LogUtils;
import com.mojang.serialization.DataResult;
import net.minecraft.core.RegistryAccess;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.Tag;
import net.minecraft.world.item.ItemStack;
import org.slf4j.Logger;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;

// The client mirrors every backpack slot into NBT with the level's registries, but after the lobby to server switch
// some stacks still hold enchantment holders from the other registry set and getOrThrow crashed the game on a shift-click.
// The server owns the real contents and resyncs them, so the client copy just keeps the slot index for that stack
@Mixin(targets = "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler")
abstract class SophisticatedSlotNbtMixin {
    @Unique
    private static final Logger VIDECRAFT$LOGGER = LogUtils.getLogger();

    @Redirect(method = "lambda$getSlotsStackNbt$7", at = @At(value = "INVOKE", target = "Lcom/mojang/serialization/DataResult;getOrThrow()Ljava/lang/Object;"))
    private static Object videcraft$skipForeignHolders(DataResult<Tag> result, ItemStack stack, CompoundTag slotTag, RegistryAccess registryAccess) {
        return result.resultOrPartial(error -> VIDECRAFT$LOGGER.warn("Skipped client NBT for backpack stack {}: {}", stack, error)).orElse(slotTag);
    }
}
