// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    modules: ["@tresjs/nuxt"],
    devtools: { enabled: true },
    devServer: {
        port: 4243,
    },
    nitro: {
        prerender: {
            autoSubfolderIndex: false,
        },
    },
    css: ["./style/main.css"],
});
