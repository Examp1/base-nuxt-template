<script setup>
import { useWindowSizeRange } from "~/composables/useWindowSizeRange";
import TheHeader from "./components/nav/header/the-header.vue";
import TheFooter from "./components/nav/footer/the-footer.vue";
import TheStickyMedia from "./components/common/the-sticky-media.vue";
useWindowSizeRange();
</script>
<template>
    <div>
        <NuxtLoadingIndicator />
        <TheHeader></TheHeader>
        <NuxtRouteAnnouncer />
        <NuxtPage />
        <TheFooter />
        <TheStickyMedia />
    </div>
</template>
