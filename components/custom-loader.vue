<script lang="ts" setup>
defineProps({
    hasModelLoaded: Boolean,
    progress: Number,
});

const shouldBeLoading = ref(true);
minDelay(
    shouldBeLoading,
    2000,
    () => true,
    () => false
);
</script>

<template>
    <div
        class="loader-container"
        :class="!(shouldBeLoading || !hasModelLoaded) ? 'disappear' : ''"
    >
        <section :v-show="shouldBeLoading">
            <div class="star" style="--index: 0"></div>
            <div class="star" style="--index: 1"></div>
            <div class="star" style="--index: 2"></div>
            <span class="loader"></span>
        </section>
    </div>
</template>

<style scoped>
.loader-container {
    width: 100vw;
    height: 100dvh;
    background-color: #090909;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
}

section {
    position: relative;
    z-index: 3;
}
.loader {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    border: 3px solid;
    border-color: rgba(175, 240, 241, 0.5) rgba(175, 240, 241, 0.5) transparent
        transparent;
    animation: rotation 10s linear infinite;
}
.loader::after,
.loader::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid;
    border-color: rgba(175, 240, 241, 0.358) rgba(175, 240, 241, 0.358)
        transparent transparent;
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.loader::before {
    width: 60px;
    height: 60px;
    border-color: rgba(175, 240, 241, 0.9) rgba(175, 240, 241, 0.9) transparent
        transparent;
    animation: rotation 1s linear infinite;
}

.loader::after {
    animation: rotationBack 1 s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes rotationBack {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
}
.disappear {
    animation: disappear 1s forwards;
    transition: opacity 1s ease-out;
}

@keyframes disappear {
    0% {
        opacity: 1;
        display: flex;
        z-index: 2;
    }

    99% {
        display: flex;
        z-index: 2;
    }

    100% {
        opacity: 0;
        display: none;
        z-index: -1;
    }
}
section {
    height: 30%;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.star {
    height: 100%;
    aspect-ratio: 1;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: rotate(calc(30deg * var(--index)));
    animation: flash 6s infinite;

    /* background-color: red; */
    background-image: radial-gradient(
        circle,
        #232323,
        rgba(217, 244, 246, 0.1) 70%
    );
    background-size: 150%;
    mix-blend-mode: difference;
}
@keyframes flash {
    0% {
        box-shadow: 0 0 32px 18px rgb(45, 2, 119);
    }
    20% {
        box-shadow: 0 0 12px 12px rgb(37, 170, 215);
    }
    40% {
        box-shadow: 0 0 12px 12px rgb(72, 10, 110);
    }
    60% {
        box-shadow: 0 0 32px 18px rgb(156, 37, 215);
    }
    80% {
        box-shadow: 0 0 12px 12px rgb(37, 170, 215);
    }

    100% {
        box-shadow: 0 0 32px 18px rgb(45, 2, 119);
    }
}
</style>
