import { APP_ENUM } from "./APP_ENUM";
import { useI18n } from "vue-i18n";
import { handleApiError } from "../composables/handleApiError";

export async function useApi<T = any>(url: string, requestBody: Record<string, any>) {
    const { locale } = useI18n();
    const cacheKey = `${locale.value}-${requestBody?.slug ?? url}`;
    
    const { data, error, status, refresh } = await useAsyncData<T>(cacheKey, () =>
        $fetch(APP_ENUM.BASE_URL + url, {
            method: "POST",
            body: {
                lang: locale.value,
                ...requestBody,
            },
        }),
    );

    if (error.value) {
        console.log(error._value);
        console.log("error if");
        console.log(locale.value || "ne rabotaet syka");

        if (error.value) {
            handleApiError(error);
        }
    }

    return {
        data,
        error,
        status,
        refresh,
    };
}
