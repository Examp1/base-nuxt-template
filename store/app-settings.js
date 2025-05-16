import { BASE_URL } from "~/constants";
import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting-store", {
    state: () => ({
        menuCount: null,
        settings: null,
        headerMenu: null,
        footerMenu: null,
        navBarMenu: null,
    }),
    getters: {
        contactSettings: (state) => {
            return state.settings.contacts;
        },
        logosSettings: (state) => state.settings.logos,
        // getSEO: (state) => state.settings.seo || null,
    },
    actions: {
        async fetchSettigns(cacheKey, locale) {
            try {
                const { data } = await useFetch(`${BASE_URL}/api/setting/get`, {
                    key: cacheKey,
                    method: "POST",
                    body: { lang: locale },
                });
                this.settings = data.value.items;
            } catch (error) {
                console.error("Ошибка при загрузке настроек:", error);
            }
        },
        async loadSettings(locale) {
            const cacheKey = `settings-${locale}`;
            const cacheData = useNuxtData(cacheKey).data.value
            if (cacheData) {
                this.settings = cacheData.items;
            } else {
                await this.fetchSettigns(cacheKey, locale);
            }
        },
    },
});
