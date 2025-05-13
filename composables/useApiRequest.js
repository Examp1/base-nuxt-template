import { BASE_URL } from "@/constants";
import { addMetaTags } from "~/composables/useMetaTags"
import { watch } from "vue";
export const useApiRequest = (url, reqOptions) => {
    const { locale } = useI18n();
    const cacheKey = `${locale.value}-${reqOptions.slug}`;
    const cacheData = useNuxtData(cacheKey).data.value


    if (cacheData) {
        addMetaTags(cacheData.seo)
        return {
            data: cacheData,
            status: "success",
        };
    } else {
        const { data, status, error } = useAsyncData(cacheKey, () =>
            $fetch(`${BASE_URL}/${url}`, {
                method: "POST",
                body: {
                    lang: locale.value,
                    ...reqOptions,
                },
            }),
        );
        watch(
            status,
            (n) => {
                if (n === "error") {
                    throw createError({
                        statusCode: 404 || error.value.statusCode || 500,
                        statusMessage:
                            error.value.statusMessage || "Page Not Found",
                        fatal: true,
                    });
                }
            },
            { immediate: true },
        );
        addMetaTags(data.seo)
        return { data, status };
    }
};
// import { BASE_URL } from "~/constants";
// export const fetchData = async (url, reqOptions) => {
//     const locale = useNuxtApp().$i18n.locale;
//     const result = await useAsyncData("home", () =>
//         $fetch(`${BASE_URL}/${url}`, {
//             method: "POST",
//             body: {
//                 lang: locale.value,
//                 ...reqOptions,
//             },
//         }),
//     );
//     return result
// };
