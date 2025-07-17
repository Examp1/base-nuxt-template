// function parseScriptsAndNoscripts(scriptStr) {
//     const tagRegex =
//         /(<script[\s\S]*?<\/script>)|(<noscript[\s\S]*?<\/noscript>)/gi;
//     const tagMatches = scriptStr.match(tagRegex);

//     const rawScriptList = [];
//     const rawNoScriptList = [];
//     if (!tagMatches) return;

//     tagMatches.forEach((tag) => {
//         if (tag.includes("<script")) {
//             const srcMatch = tag.match(/src=['"]([^'"]*)['"]/);
//             const asyncMatch = tag.includes("async");
//             if (srcMatch) {
//                 rawScriptList.push({ src: srcMatch[1], async: asyncMatch });
//             } else {
//                 const innerHTMLMatch = tag.match(
//                     /<script.*?>([\s\S]*?)<\/script>/,
//                 );
//                 if (innerHTMLMatch) {
//                     rawScriptList.push({ innerHTML: innerHTMLMatch[1] });
//                 }
//             }
//         } else if (tag.includes("<noscript")) {
//             const iframeMatch = tag.match(
//                 /<noscript.*?>([\s\S]*?)<\/noscript>/,
//             );
//             if (iframeMatch) {
//                 rawNoScriptList.push({ innerHTML: iframeMatch[1] });
//             }
//         }
//     });

//     return { rawScriptList, rawNoScriptList };
// }

const generateJsonLd = (schemes: string[]) => {
    try {
        return schemes.map((item: any) => ({
            type: "application/ld+json",
            innerHTML: item,
        }));
        // });
    } catch (error) {
        console.warn("JSON-LD parse error:", error);
        return [];
    }
};

// const parseScripts = (code: string) => {
//     if (!code) return [];
//     // ... ваша реализация parseScriptsAndNoscripts
//     return scripts;
// };
export const useSeo = (meta: any, paginateData?: any) => {
    const { locale, locales, defaultLocale } = useI18n();
    const route = useRoute();

    // Обработка тайтла и описания
    let title = meta.title || "Default Title";
    let description = meta.description || "Default Description";

    // Пагинация
    if (route.query.page && Number(route.query.page) > 1) {
        const pageText = locale.value === "uk" ? "Сторінка" : "Страница";
        title = `${pageText} ${route.query.page} - ${title}`;
        description = `${pageText} ${route.query.page} - ${description}`;
    }

    // Базовый URL
    const baseUrl = "https://sidev.digital";
    const currentPath = route.fullPath.replace(/^\/(en|ru)(\/|$)/, "/");

    // Alternate-ссылки
    // const alternateLinks = locales.value.map((loc: any) => ({
    //     rel: "alternate",
    //     hreflang: loc.code,
    //     href:
    //         loc.code === defaultLocale
    //             ? `${baseUrl}${currentPath}`
    //             : `${baseUrl}/${loc.code}${currentPath}`,
    // }));
    const alternateLinks = locales.value.map((loc) => {
        let href =
            loc.code === defaultLocale
                ? `${baseUrl}${currentPath}`
                : `${baseUrl}/${loc.code}${currentPath}`;
        if (href.endsWith("/")) {
            href = href.slice(0, -1);
        }
        return {
            rel: "alternate",
            hreflang: loc.code,
            href,
        };
    });

    // Основные мета-теги
    useSeoMeta({
        title,
        description,
        ogTitle: meta.og?.title,
        ogDescription: meta.og?.description,
        ogImage: meta.og?.image,
        ogUrl: meta.og?.url,
        robots: route.path.includes("search") ? "noindex, follow" : undefined,
    });

    // Скрипты и микроразметка
    useHead({
        htmlAttrs: {
            lang: locale.value,
        },
        link: [
            { rel: "canonical", href: `${baseUrl}${route.path}` },
            ...alternateLinks,
            // ...(paginateData ? getPaginationLinks(paginateData, baseUrl) : []),
        ],
        script: [
            ...generateJsonLd(meta.schema),
            // ...parseScripts(meta.schema),
        ],
    });
};
