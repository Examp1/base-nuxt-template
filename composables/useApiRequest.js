import { BASE_URL } from "@/constants";
import { watch } from "vue";
export const useApiRequest = (cacheKey, url, reqOptions) => {
  const { data, status, error } = useAsyncData(cacheKey, () =>
    $fetch(`${BASE_URL}/${url}`, {
      method: "POST",
      body: {
        ...reqOptions,
      },
    })
  );

  watch(
    status,
    (n) => {
      if (n === "error") {
        throw createError({
          statusCode: 404 || error.value.statusCode || 500,
          statusMessage: error.value.statusMessage || "Page Not Found",
          fatal: true,
        });
      }
    },
    { immediate: true }
  );

  return { data, status };
};
