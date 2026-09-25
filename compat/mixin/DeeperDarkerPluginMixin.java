package org.videcraft.mixin;

import com.kyanite.deeperdarker.DeeperDarkerConfig;
import org.objectweb.asm.Opcodes;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Redirect;

@Mixin(targets = "com.illusivesoulworks.elytraslot.common.integration.deeperdarker.DeeperDarkerPlugin")
abstract class DeeperDarkerPluginMixin {
    @Redirect(method = "tick", at = @At(value = "FIELD", target = "Lcom/kyanite/deeperdarker/DeeperDarkerConfig;soulElytraCooldown:I", opcode = Opcodes.GETSTATIC))
    private static int videcraft$soulElytraCooldown() {
        return DeeperDarkerConfig.CONFIG.soulElytraCooldown.get();
    }
}
