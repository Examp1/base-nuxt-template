export default defineNuxtRouteMiddleware((to) => {
    const nuxtApp = useNuxtApp();

    nuxtApp.hook("page:finish", () => {
        const isHome = to.path === "/";
        const newClass = isHome ? "bg-light-2" : "bg-light";

        const appEl = document.getElementById("__nuxt");
        if (appEl) {
            appEl.classList.remove("bg-light", "bg-light-2");
            appEl.classList.add(newClass);
        }
    });
});
