<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";
const { scene: model } = await useGLTF("/models/elegance.glb", {
    draco: true,
});

const { onBeforeRender } = useLoop();

onBeforeRender(({ delta, elapsed }) => {
    if (eleganceRef.value) {
        eleganceRef.value.rotation.y += delta;
    }
});

const eleganceRef = shallowRef();
</script>

<template>
    <TresMesh :scale="[3, 3, 3]" ref="eleganceRef">
        <primitive :object="model" />
    </TresMesh>
</template>
