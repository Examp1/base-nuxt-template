import { BASE_URL } from "~/constants";
import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting-store", {
    state: () => ({
        test: {
            id: "13",
            btnName: "Отримати консультацію",
            data: [
                {
                    _custom: {
                        type: "reactive",
                        stateTypeName: "Reactive",
                        value: {
                            label: "Заголовок",
                            visibility: "1",
                            type: "form-title",
                            value: "Залиште заявку",
                        },
                    },
                },
                {
                    _custom: {
                        type: "reactive",
                        stateTypeName: "Reactive",
                        value: {
                            label: "Input",
                            visibility: "1",
                            type: "form-input",
                            name: "name",
                            title: null,
                            placeholder: "Ім’я",
                            show_in_message: "1",
                            shown_name: "Ім’я",
                            rules: {
                                required: true,
                                email: false,
                                min: 0,
                                max: 0,
                            },
                            messages: {
                                required: null,
                                email: null,
                                min: null,
                                max: null,
                            },
                        },
                    },
                },
                {
                    _custom: {
                        type: "reactive",
                        stateTypeName: "Reactive",
                        value: {
                            label: "Input",
                            visibility: "1",
                            type: "form-input",
                            name: "phone",
                            title: null,
                            placeholder: "Телефон",
                            show_in_message: "1",
                            shown_name: "Телефон",
                            rules: {
                                required: true,
                                email: false,
                                min: 0,
                                max: 0,
                            },
                            messages: {
                                required: null,
                                email: null,
                                min: null,
                                max: null,
                            },
                        },
                    },
                },
                {
                    _custom: {
                        type: "reactive",
                        stateTypeName: "Reactive",
                        value: {
                            label: "Textarea",
                            visibility: "1",
                            type: "form-editor",
                            name: "text",
                            title: null,
                            placeholder: "Введіть Ваш запит  або запитання",
                            show_in_message: "1",
                            shown_name: "Текст",
                            rules: {
                                required: false,
                                email: false,
                                min: 0,
                                max: 0,
                            },
                            messages: {
                                required: null,
                                email: null,
                                min: null,
                                max: null,
                            },
                        },
                    },
                },
            ],
        },
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
            const cacheData = useNuxtData(cacheKey).data.value;
            if (cacheData) {
                this.settings = cacheData.items;
            } else {
                await this.fetchSettigns(cacheKey, locale);
            }
        },
        async fetchMenus(cacheKey, locale) {
            // 62 - header menu
            // 64 - footer menu
            // 63 - navbar menu
            try {
                const { data } = await useFetch(
                    `${BASE_URL}/api/menu/get-by-ids`,
                    {
                        key: cacheKey,
                        method: "POST",
                        body: {
                            ids: [62, 63, 64],
                            lang: locale,
                        },
                    },
                );
                this.headerMenu = data.items[62];
                this.footerMenu = data.items[64];
                this.navBarMenu = data.items[63];
            } catch (error) {
                console.error("Ошибка при загрузке меню:", error);
            }
        },
        async loadMenus(locale) {
            const cacheKey = `menus-${locale}`;
            const cacheData = useNuxtData(cacheKey).data.value;
            if (cacheData) {
                // console.log(cacheData);
                this.headerMenu = cacheData.items[62];
                this.footerMenu = cacheData.items[64];
                this.navBarMenu = cacheData.items[63];
            } else {
                await this.fetchMenus(cacheKey, locale);
            }
        },
    },
});
