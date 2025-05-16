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
    i18n: {
        strategy: "prefix_except_default",
        defaultLocale: "uk",
        locales: [
            { code: "uk", file: "uk.json" },
            { code: "en", file: "en.json" },
        ],
        lazy: true,
        langDir: "locales/",
        detectBrowserLanguage: false,
        // detectBrowserLanguage: {
        //     useCookie: true,
        //     cookieKey: "i18n_redirected",
        //     fallbackLocale: "uk",
        //     alwaysRedirect: false, // <<< ВАЖНО
        //     redirectOn: "root",
        // },
    },
    googleFonts: {
        // stylePath: 'assets/css/google-fonts.css',
        outputDir: "assets/",
        families: {
            Roboto: true,
        },
    },
});
