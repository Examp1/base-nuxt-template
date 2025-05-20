<script setup>
import { useApiRequest } from "@/composables/useApiRequest";
import appBreadcrumbs from "~/components/nav/app-breadcrumbs.vue";
import constructorRender from "~/components/common/constructor-render.vue";
import useUtils from "@/composables/useUtils.js";
const { getMediaPath } = useUtils();
const route = useRoute();
const { data, status } = useApiRequest("api/blog/article/get-by-slug", {
    slug: route.params.article,
});
</script>

<template v-if="status === 'success'">
    <div class="container-sm not-home-page bg-light">
        <appBreadcrumbs
            v-if="data.breadcrumbs"
            :breadcrumbs="data.breadcrumbs"
        />
        <h1 class="page-title mb-MD mt-SM">{{ data.model.name }}</h1>
        <img :src="getMediaPath(data.model.image)" :alt="data.model.name" />
        <div class="article-wrapper mt-SM mb-SM">
            <div class="block-text lg" v-html="data.model.description"></div>
            <div class="hr"></div>
            <constructorRender
                :constructor="data.constructor"
                :constructor-main-screen="data.constructor_main_screen"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
