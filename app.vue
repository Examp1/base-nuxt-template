<script setup>
import { useWindowSizeRange } from "~/composables/useWindowSizeRange";
import theHeader from "./components/nav/header/the-header.vue";
import theFooter from "./components/nav/footer/the-footer.vue";
import theStickyMedia from "./components/common/the-sticky-media.vue";

useWindowSizeRange();
</script>
<template>
    <div>
        <NuxtLoadingIndicator />
        <theHeader></theHeader>
        <NuxtRouteAnnouncer />
        <NuxtPage />
        <theFooter />
        <theStickyMedia />
    </div>
</template>
