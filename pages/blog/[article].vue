<script setup>
import { useApi } from "../composables/useApi";
import appBreadcrumbs from "~/components/nav/app-breadcrumbs.vue";
import theSharingBlock from "~/components/common/the-sharing-block.vue";
import constructorRender from "~/components/common/constructor-render.vue";
import { useSeo } from "../../composables/useSeo";
const route = useRoute();
const { data, status } = await useApi("/api/blog/article/get-by-slug", {
    slug: route.params.article,
});
useSeo(data.value.seo);
</script>

<template v-if="status === 'success'">
    <div class="container-sm not-home-page bg-light">
        <appBreadcrumbs
            v-if="data.breadcrumbs"
            :breadcrumbs="data.breadcrumbs"
        />
        <h1 class="page-title mb-MD mt-SM">{{ data.model.name }}</h1>
        <div class="sharing-block">
            <div class="text-brand">{{ data.model.created_at }}</div>
            <theSharingBlock />
        </div>
        <img
            v-if="data.model.image"
            :src="getPath(data.model.image)"
            :alt="data.model.name"
        />
        <div class="article-wrapper mt-SM mb-SM">
            <div class="block-text lg" v-html="data.model.description"></div>
            <div class="hr"></div>
            <constructorRender
                :constructor="data.constructor"
                :constructor-main-screen="data.constructor_main_screen"
            />
            <div class="hr"></div>
            <div class="sharing-block">
                <NuxtLink
                    class="btn tint md icon-chevron-left"
                    :to="localePath('/blog')"
                    >{{ $t("back") }}</NuxtLink
                >
                <theSharingBlock />
            </div>
        </div>
        <!-- <theSharingBlock :date="data.model.created_at" /> -->
    </div>
</template>

<style lang="scss" scoped>
.sharing-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
