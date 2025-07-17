<script setup>
import customConstructorRender from "~/components/common/custom-constructor-render.vue";
import { useApi } from "../composables/useApi";
import { useSeo } from "../composables/useSeo";
const { data, status, error } = await useApi("/api/page/get-by-slug", {
    slug: "/",
});
useSeo(data.value.seo);
</script>

<template>
    <div v-if="status === 'success'" class="index">
        <customConstructorRender
            :constructor="data.constructor"
            :constructor-main-screen="data.constructor_main_screen"
        />
    </div>
</template>
