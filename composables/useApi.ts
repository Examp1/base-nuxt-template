import { useI18n } from "vue-i18n";
import { APP_ENUM } from "../utils/APP_ENUM";

// 1. Метод для выполнения запроса
const fetchData = async <T>(url: string, body: Record<string, any>) => {
    const { locale } = useI18n();
    const cacheKey = `${locale.value}-${body?.slug ?? url}`;
    return await useAsyncData<T>(cacheKey, () =>
        $fetch(APP_ENUM.BASE_URL + url, {
            method: "POST",
            body: { lang: locale.value, ...body },
        }),
    );
};

// 2. Метод для обработки ошибок
const handleApiError = (error: any) => {
    if (process.server) {
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: `Server error: ${error.statusMessage}` || "API Error Server",
            fatal: true,
        });
    } else {
        showError({
            statusCode: error.statusCode || 404,
            statusMessage: `Client error: ${error.statusMessage}` || "Api Error Client",
        });
    }
};

// Главный метод, который будем использовать в компонентах
export const useApi2 = async <T = any>(
    url: string,
    body: Record<string, any>,
) => {
    // Шаг 1: Делаем запрос
    const { data, error, status } = await fetchData<T>(url, body);

    // Шаг 2: Проверяем ошибки
    if (error.value) {
        handleApiError(error.value);
        return { data: null, error: error.value, status };
    }

    // Шаг 3: Возвращаем успешные данные
    return { data, error: null, status };
};
