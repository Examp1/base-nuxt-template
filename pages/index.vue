<script setup>
import customConstructorRender from "~/components/common/custom-constructor-render.vue";

const { data, status, error } = await useApi("/api/page/get-by-slug", {
    slug: "/",
});
</script>

<template>
    <div v-if="status === 'pending'" class="preloader">loading ...</div>
    <div v-if="status === 'success'" class="index">
        <customConstructorRender
            :constructor="data.constructor"
            :constructor-main-screen="data.constructor_main_screen"
        />
    </div>
</template>
