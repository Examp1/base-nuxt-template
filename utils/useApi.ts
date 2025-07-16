import { APP_ENUM } from "./APP_ENUM";
import { useI18n } from "vue-i18n";
import { handleApiError } from "./handleApiError";

export function useApi<T = any>(url: string, requestBody: Record<string, any>) {
    const { locale } = useI18n();
    const cacheKey = `${locale.value}-${requestBody?.slug ?? url}`;

    const { data, error, status, refresh } = useAsyncData<T>(cacheKey, () =>
        $fetch(APP_ENUM.BASE_URL + url, {
            method: "POST",
            body: {
                lang: locale.value,
                ...requestBody,
            },
        }),
    );

    if (error.value) {
        if (error.value) {
            handleApiError(error.value);
        }
    }

    return {
        data,
        error,
        status,
        refresh,
    };
}
