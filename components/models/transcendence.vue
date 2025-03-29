<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";
const { scene: model } = await useGLTF("/models/transcendence.glb", {
    draco: true,
});

const { onBeforeRender } = useLoop();

onBeforeRender(({ delta, elapsed }) => {
    if (transcendenceRef.value) {
        transcendenceRef.value.rotation.y -= delta;
        transcendenceRef.value.rotation.z = elapsed * 0.1;
    }
});

const transcendenceRef = shallowRef();
</script>

<template>
    <TresMesh :scale="[3, 3, 3]" ref="transcendenceRef">
        <primitive :object="model" />
    </TresMesh>
</template>
