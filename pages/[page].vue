<script setup>
import ConstructorRender from "~/components/common/constructor-render.vue";
const route = useRoute();
import { useApi } from "../composables/useApi";
import { useSeo } from "../composables/useSeo";
const { data, status } = await useApi("/api/page/get-by-slug", {
    slug: route.params.page,
});
useSeo(data.value.seo);
</script>

<template>
    <div v-if="status === 'pending'" class="preloader">loading ...</div>
    <div v-if="status === 'success'">
        <ConstructorRender :constructor="data.constructor" />
    </div>
</template>

<style scoped></style>
