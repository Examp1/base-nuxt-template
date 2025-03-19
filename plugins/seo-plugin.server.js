// plugins/init.server.ts
import { useSettingStore } from "~/store/app-settings.js";
import { defineNuxtPlugin } from "#app";

import {
    fetchSettings,
    fetchMenus,
} from "~/composables/fetchMenusAndProjectSettings.js";

export default defineNuxtPlugin(async (nuxtApp) => {
    const locale = nuxtApp.$i18n.locale.value;
    const { menuCount, settings, headerMenu, footerMenu, navBarMenu } =
        storeToRefs(useSettingStore());

    if (!settings.value?.seo) {
        const data = await fetchSettings(locale);
        settings.value = data;
    }
    useHead({
        title: settings.value.sitename,
        link: [
            {
                rel: "shortcut icon",
                href: path(settings.value.favicon),
                type: "image/png",
            },
        ],
    });

    if (!menuCount.value) {
        const menus = await fetchMenus([54, 55, 61], locale);
        menuCount.value = menus.length;
        headerMenu.value = menus[54];
        navBarMenu.value = menus[61];
        footerMenu.value = menus[55];
    }

    nuxtApp.$i18n.onBeforeLanguageSwitch(() => {
        console.log("locale switch");
    });
});
