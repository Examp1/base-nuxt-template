import { APP_ENUM } from "./APP_ENUM";
import { useI18n } from "vue-i18n";

export async function testUseApi<T = any>(
    url: string,
    requestBody: Record<string, any>,
) {
    const { locale } = useI18n();
    const cacheKey = `${locale.value}-${requestBody?.slug ?? url}`;

    const { data, error, status, refresh } = await useAsyncData<T>(
        cacheKey,
        () =>
            $fetch(APP_ENUM.BASE_URL + url, {
                method: "POST",
                body: {
                    lang: locale.value,
                    ...requestBody,
                },
            }),
    );

    if (error.value) {
        if (import.meta.server) {
            throw createError({
                statusCode: error.statusCode || 500,
                statusMessage:
                    `Server error: ${error.statusMessage}` ||
                    "API Error Server",
                fatal: true,
            });
        } else {
            showError({
                statusCode: error.statusCode || 404,
                statusMessage:
                    `Client error: ${error.statusMessage}` ||
                    "Api Error Client",
            });
        }
    }

    return {
        data,
        error,
        status,
        refresh,
    };
}
