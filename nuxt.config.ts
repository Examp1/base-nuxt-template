// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: {
        enabled: true,

        timeline: {
            enabled: true,
        },
    },

    app: {
        rootAttrs: {
            "data-windowsize": "desktop",
        },
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
                },
            ],
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                    additionalData: ` @use "~/assets/scss/mixinsAndVariables/breakpoints.scss" as *;`,
                },
            },
        },
    },

    css: ["~/assets/scss/main.scss"],

    modules: [
        "@vueuse/nuxt",
        "@nuxtjs/i18n",
        "@pinia/nuxt",
        "@nuxtjs/google-fonts",
    ],
    plugins: ["~/plugins/seo-plugin.server.js", "~/plugins/change-locale.js"],
    i18n: {
        locales: [
            { code: "uk", name: "Ukrainian", file: "uk.json" },
            { code: "en", name: "English", file: "en.json" },
        ],
        defaultLocale: "uk",
    },
    googleFonts: {
        // stylePath: 'assets/css/google-fonts.css',
        outputDir: 'assets/',
        families: {
            "Roboto": true,
        },
    },
});
