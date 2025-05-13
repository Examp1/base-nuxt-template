import { BASE_URL } from "~/constants";
export default defineNuxtPlugin((nuxtApp) => {
    const pinia = nuxtApp.$pinia.state.value;
    const locale = nuxtApp.$i18n.locale.value;
    const fetchSettings = async () => {
        try {
            const { data } = await useFetch(`${BASE_URL}/api/setting/get`, {
                method: "POST",
                body: { lang: locale },
            });
            pinia["setting-store"].settings = data?.value.items;
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
