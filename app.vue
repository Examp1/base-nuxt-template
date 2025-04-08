<template>
    <div>
        <NuxtLoadingIndicator />
        <TheHeader></TheHeader>
        <NuxtRouteAnnouncer />
        <NuxtPage />
        <TheFooter />
    </div>
</template>
<script setup>
import { useWindowSizeRange } from "~/composables/useWindowSizeRange";
import TheHeader from "./components/nav/header/the-header.vue";
import TheFooter from "./components/nav/footer/the-footer.vue";
useWindowSizeRange();
</script>

<style lang="scss" scoped></style>
