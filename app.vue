<template>
    <main>
        <NuxtPage />
        <footer>
            <div class="max-w-foot-container">
                <p id="power">
                    music:
                    <span id="souluos">Jazz Espresso - Feel The Beat</span>
                </p>
                <NuxtLink
                    to="https://www.instagram.com/souluos.dan/"
                    target="_blank"
                >
                    <p id="power">
                        powered by <span id="souluos">souluos</span>
                    </p>
                </NuxtLink>
            </div>
        </footer>
    </main>
</template>

<style scoped>
@import "./style/main.css";

footer {
    position: absolute;
    bottom: 0;
    z-index: 4;
    height: 30px;
    width: 100vw;
    background-color: #160d1f;
    box-shadow: 0 0 8px 1px #180f22;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
}

.max-w-foot-container {
    max-width: 1280px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
}

#power {
    cursor: pointer;
    animation: highlight 2s infinite;
}

#souluos {
    cursor: pointer;
    font-family: "Paytone One", Arial, sans-serif;
    animation: highlight 2s infinite;
}

#home-button {
    width: 80px;
    text-align: start;
    font-size: 3.2rem;
    text-shadow: rgb(111, 0, 255) 20px -4px 50px;
    cursor: pointer;
    letter-spacing: -0.62rem;
    transform: rotate(90deg);
}

@keyframes highlight {
    0% {
        color: #f9f9f9;
        text-shadow: #f9f9f9 0 0 30px;
    }

    60% {
        color: #cce42f;
        text-shadow: #cce42f 0 0 30px;
    }

    100% {
        color: #f9f9f9;
        text-shadow: #f9f9f9 0 0 30px;
    }
}

@media screen and (min-width: 800px) {
    main {
        position: relative;
        height: calc(100dvh);
    }
}
</style>
