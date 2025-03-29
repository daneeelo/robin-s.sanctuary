<script setup>
import CustomLoader from "~/components/custom-loader.vue";
import Elegance from "~/components/models/elegance.vue";
import Transcendence from "~/components/models/transcendence.vue";
import { EffectComposer, UnrealBloom, Glitch } from "@tresjs/post-processing";
import Vibe from "~/public/audio/feelTheBeat-jazzEspresso.mp3";

useHead({
    title: "Robin's Sanctuary",
});

const { hasFinishLoading } = await useProgress();
const song = ref();
const isSongPlaying = ref(false);

const playSong = () => {
    song.value.play();
};

const stopSong = () => {
    song.value.pause();
};

onMounted(() => {
    song.value = document.getElementById("we-score");
});

onUnmounted(() => {
    stopSong();
});
</script>

<template>
    <main>
        <CustomLoader :has-model-loaded="hasFinishLoading" />
        <section v-show="hasFinishLoading">
            <audio id="we-score" :src="Vibe" loop></audio>
            <button
                @click="
                    () => {
                        if (isSongPlaying) {
                            isSongPlaying = false;
                            stopSong();
                        } else {
                            isSongPlaying = true;
                            playSong();
                        }
                    }
                "
            >
                <img
                    :src="isSongPlaying ? '/audio-on.svg' : '/audio-off.svg'"
                />
            </button>
            <TresCanvas window-size clear-color="#090909" shadows alpha>
                <TresPerspectiveCamera :position="[12, 6, 15]" />
                <EffectComposer>
                    <UnrealBloom radius=".1" strength="0.9" />
                    <Glitch :go-wild="true" />
                </EffectComposer>
                <OrbitControls :max-distance="12" :min-distance="2" />
                <Suspense>
                    <Elegance />
                </Suspense>
                <Suspense>
                    <Transcendence />
                </Suspense>
            </TresCanvas>
        </section>
    </main>
</template>

<style scoped>
button {
    position: absolute;
    bottom: 40px;
    left: 20px;
    z-index: 30;
    background-color: transparent;
    border: none;
    width: 70px;
    height: 70px;
}
main {
    width: 100vw;
    height: 100dvh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #090909;
}
</style>
