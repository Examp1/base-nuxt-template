import { BASE_URL } from "~/constants";
import { useSettingStore } from "~/store/app-settings.js";
export default defineNuxtPlugin(async (nuxtApp) => {
    const { settings, headerMenu, footerMenu, navBarMenu } =
        storeToRefs(useSettingStore());
    const locale = nuxtApp.$i18n.locale.value;
    const fetchSettings = async () => {
        console.log("fetchSettings-plugin");
        console.log(settings);
        try {
            const { data } = await useFetch(`${BASE_URL}/api/setting/get`, {
                method: "POST",
                body: { lang: locale },
            });
            settings.value = data?.value.items;
        } catch (error) {
            console.error("Ошибка при загрузке настроек:", error);
        }
    };
    const fetchMenus = async (ids) => {
        try {
            const { data } = await useFetch(`${BASE_URL}/api/menu/get-by-ids`, {
                method: "POST",
                body: {
                    ids,
                    lang,
                },
            });
            return data?.value.items;
        } catch (error) {
            console.error("Ошибка при загрузке меню:", error);
        }
    };
    // fetchMenus()
    fetchSettings();
});
