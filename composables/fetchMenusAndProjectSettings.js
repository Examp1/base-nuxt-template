import { BASE_URL } from "@/constants";
export const fetchMenus = async (ids, lang) => {
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

export const fetchSettings = async (lang) => {
    console.log('fetchSettings-composible');
    try {
        const { data } = await useFetch(`${BASE_URL}/api/setting/get`, {
            method: "POST",
            body: { lang },
        });
        return data?.value.items;
    } catch (error) {
        console.error("Ошибка при загрузке настроек:", error);
    }
};
