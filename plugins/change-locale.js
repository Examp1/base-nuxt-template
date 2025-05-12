// // plugins/init.server.ts
// import { useSettingStore } from "~/store/app-settings.js";
// import { defineNuxtPlugin } from "#app";

// import {
//     fetchSettings,
// } from "~/composables/fetchMenusAndProjectSettings.js";

// export default defineNuxtPlugin((nuxtApp) => {
//     nuxtApp.hook("i18n:localeSwitched", async ({ oldLocale, newLocale }) => {
//         console.log("onLanguageSwitched", oldLocale, newLocale);
//         const locale = nuxtApp.$i18n.locale.value;
//         const { menuCount, settings, headerMenu, footerMenu, navBarMenu } =
//             storeToRefs(useSettingStore());

//         const data = await fetchSettings(locale);
//         // settings.value = data;

//         useHead({
//             title: 'test',
//         });

//         // const menus = await fetchMenus([54, 55, 61], locale);
//         // menuCount.value = menus.length;
//         // headerMenu.value = menus[54];
//         // navBarMenu.value = menus[61];
//         // footerMenu.value = menus[55];
//     });
// });
