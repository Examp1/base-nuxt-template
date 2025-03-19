import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting-store", {
    state: () => ({
        menuCount: null,
        settings: null,
        headerMenu: null,
        footerMenu: null,
    }),
    getters: {
        contactSettings: (state) => {
            return state.settings.contacts;
        },
        logosSettings: (state) => state.settings.logos,
        // getSEO: (state) => state.settings.seo || null,
    },
});
