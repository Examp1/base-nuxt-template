<script setup>
import { useApiRequest } from "@/composables/useApiRequest";
import ConstructorRender from "~/components/constructor/constructor-render.vue";
const { data, status } = useApiRequest("home", "api/page/get-by-slug", {
    lang: "uk",
    slug: "/",
});
</script>

<template>
    <div v-if="status === 'pending'" class="preloader">loading ...</div>
    <div v-if="status === 'success'">
        <ConstructorRender :constructor="data.constructor" :constructor-main-screen="data.constructor_main_screen" />
    </div>
</template>

