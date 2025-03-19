import { BASE_URL } from "@/constants";
export const getPageBySlug = async (locale, slug = "/") => {
  try {
    const { data, status, error } = await useAsyncData("home-page", () =>
      $fetch(`${BASE_URL}/api/page/get-by-slug`, {
        method: "POST",
        body: {
          lang: locale.value,
          slug: "/",
        },
      })
    );
    return data;
  } catch (e) {}
};
