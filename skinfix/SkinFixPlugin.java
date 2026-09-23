package org.videcraft.skinfix;

import java.util.List;
import java.util.Map;
import java.util.Set;
import org.objectweb.asm.tree.ClassNode;
import org.spongepowered.asm.mixin.extensibility.IMixinConfigPlugin;
import org.spongepowered.asm.mixin.extensibility.IMixinInfo;

public final class SkinFixPlugin implements IMixinConfigPlugin {
    private static final Map<String, String> HOSTS = Map.of(
        "minecraft.api.auth.host", "https://authserver.mojang.com",
        "minecraft.api.account.host", "https://api.mojang.com",
        "minecraft.api.session.host", "https://sessionserver.mojang.com",
        "minecraft.api.services.host", "https://api.minecraftservices.com");

    @Override
    public void onLoad(String mixinPackage) {
        for (var host : HOSTS.entrySet()) {
            var current = System.getProperty(host.getKey());
            if (current != null && current.contains("nope.invalid")) {
                System.setProperty(host.getKey(), host.getValue());
                System.out.println("[videcraft_skinfix] " + host.getKey() + " restored to " + host.getValue());
            }
        }
    }

    @Override
    public String getRefMapperConfig() {
        return null;
    }

    @Override
    public boolean shouldApplyMixin(String targetClassName, String mixinClassName) {
        return true;
    }

    @Override
    public void acceptTargets(Set<String> myTargets, Set<String> otherTargets) {
    }

    @Override
    public List<String> getMixins() {
        return null;
    }

    @Override
    public void preApply(String targetClassName, ClassNode targetClass, String mixinClassName, IMixinInfo mixinInfo) {
    }

    @Override
    public void postApply(String targetClassName, ClassNode targetClass, String mixinClassName, IMixinInfo mixinInfo) {
    }
}
