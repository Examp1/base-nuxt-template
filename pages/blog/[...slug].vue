<script setup>
import { useApiRequest } from "@/composables/useApiRequest";
import appBreadcrumbs from "~/components/nav/app-breadcrumbs.vue";
import constructorRender from "~/components/constructor/constructor-render.vue";
import useUtils from "@/composables/useUtils.js";
const { getMediaPath } = useUtils();
const route = useRoute();
const { data, status } = useApiRequest("api/blog/article/get-by-slug", {
    slug: route.params.slug[route.params.slug.length - 1],
});
</script>

<template>
    <div class="container-sm not-home-page bg-light">
        <appBreadcrumbs :breadcrumbs="data.breadcrumbs" />
        <h1 class="page-title mb-MD mt-SM">{{ data.model.name }}</h1>
        <img :src="getMediaPath(data.model.image)" alt="data.model.name">
        <constructorRender
            :constructor="data.constructor"
            :constructor-main-screen="data.constructor_main_screen"
        />
    </div>
</template>

<style lang="scss" scoped></style>
