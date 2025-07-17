import { useI18n } from "vue-i18n";
import { APP_ENUM } from "../utils/APP_ENUM";

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

const handleApiError = (error: any) => {
    if (import.meta.server) {
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage:
                `Server error: ${error.statusMessage}` || "API Error Server",
            fatal: true,
        });
    } else {
        showError({
            statusCode: error.statusCode || 404,
            statusMessage:
                `Client error: ${error.statusMessage}` || "Api Error Client",
        });
    }
};

export const useApi = async <T = any>(
    url: string,
    body: Record<string, any>,
) => {
    const { data, error, status, refresh } = await fetchData<T>(url, body);

    if (error.value) {
        handleApiError(error.value);
        return { data: null, error: error.value, status };
    }

    return { data, error: null, status, refresh };
};
