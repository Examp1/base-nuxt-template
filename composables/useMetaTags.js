import { useSettingStore } from "~/store/app-settings.js";
export const addMetaTags = (meta) => {
    const { settings } = storeToRefs(useSettingStore());
    if (!meta) return;
    useHead({
        title: meta.title || settings.value.sitename || "Sisi.dev",
        meta: [
            meta.description && {
                name: "description",
                content: meta.description,
            },
            // Open Graph
            meta.og?.title && { property: "og:title", content: meta.og.title },
            meta.og?.description && {
                property: "og:description",
                content: meta.og.description,
            },
            meta.og?.image && { property: "og:image", content: meta.og.image },
            meta.og?.url && { property: "og:url", content: meta.og.url },
            meta.og?.type && { property: "og:type", content: meta.og.type },
            meta.og?.locale && {
                property: "og:locale",
                content: meta.og.locale,
            },
            meta.og?.site_name && {
                property: "og:site_name",
                content: meta.og.site_name,
            },
        ].filter(Boolean),
        link: [
            {
                rel: "icon",
                href: getPath(settings.value.favicon),
                type: "image/x-icon",
            },
        ].filter(Boolean),
    });
};
