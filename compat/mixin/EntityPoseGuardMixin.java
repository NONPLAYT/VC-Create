package org.videcraft.mixin;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.logging.LogUtils;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.world.entity.Entity;
import org.slf4j.Logger;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

// Some entity renderer pops the pose stack once more than it pushes. Near airships that emptied the stack and the
// next entity crashed every client in range at once with NoSuchElementException in PoseStack.pushPose.
// Each entity now gets back the depth it started with, and the renderer that broke it is logged once by type.
// The level's entity PoseStack starts from identity in 1.21.1 (the camera lives in the model-view matrix),
// so an identity pose is the correct base to restore.
@Mixin(targets = "net.minecraft.client.renderer.entity.EntityRenderDispatcher")
abstract class EntityPoseGuardMixin {
    @Unique
    private static final Logger VIDECRAFT$LOGGER = LogUtils.getLogger();
    @Unique
    private static final Set<String> VIDECRAFT$REPORTED = ConcurrentHashMap.newKeySet();
    @Unique
    private static final ThreadLocal<Deque<Integer>> VIDECRAFT$DEPTHS = ThreadLocal.withInitial(ArrayDeque::new);
    @Unique
    private static String videcraft$last = "none";

    @Inject(method = "render(Lnet/minecraft/world/entity/Entity;DDDFFLcom/mojang/blaze3d/vertex/PoseStack;Lnet/minecraft/client/renderer/MultiBufferSource;I)V", at = @At("HEAD"))
    private void videcraft$recordDepth(Entity entity, double x, double y, double z, float yaw, float partialTick,
                                       PoseStack poseStack, MultiBufferSource buffers, int light, CallbackInfo ci) {
        Deque<PoseStack.Pose> poses = ((PoseStackDepthAccessor) poseStack).videcraft$poses();
        if (poses.isEmpty()) {
            poses.addLast(new PoseStack().last());
            videcraft$report("before " + videcraft$type(entity) + ", last rendered " + videcraft$last);
        }
        VIDECRAFT$DEPTHS.get().push(poses.size());
    }

    @Inject(method = "render(Lnet/minecraft/world/entity/Entity;DDDFFLcom/mojang/blaze3d/vertex/PoseStack;Lnet/minecraft/client/renderer/MultiBufferSource;I)V", at = @At("RETURN"))
    private void videcraft$restoreDepth(Entity entity, double x, double y, double z, float yaw, float partialTick,
                                        PoseStack poseStack, MultiBufferSource buffers, int light, CallbackInfo ci) {
        Integer depth = VIDECRAFT$DEPTHS.get().poll();
        String type = videcraft$type(entity);
        videcraft$last = type;
        if (depth == null) return;
        Deque<PoseStack.Pose> poses = ((PoseStackDepthAccessor) poseStack).videcraft$poses();
        if (poses.size() >= depth) return;
        while (poses.size() < depth) {
            poses.addLast(poses.isEmpty() ? new PoseStack().last() : poses.getLast().copy());
        }
        videcraft$report("by " + type);
    }

    @Unique
    private static String videcraft$type(Entity entity) {
        return String.valueOf(BuiltInRegistries.ENTITY_TYPE.getKey(entity.getType()));
    }

    @Unique
    private static void videcraft$report(String where) {
        if (VIDECRAFT$REPORTED.add(where)) {
            VIDECRAFT$LOGGER.warn("Repaired an over-popped entity pose stack {}", where);
        }
    }
}
