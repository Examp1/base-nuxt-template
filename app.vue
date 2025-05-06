<script setup>
import { onMounted, ref } from "vue";
import { useNuxtApp } from "#app";
import { useWindowSizeRange } from "~/composables/useWindowSizeRange";
import theHeader from "./components/nav/header/the-header.vue";
import theFooter from "./components/nav/footer/the-footer.vue";
import theStickyMedia from "./components/common/the-sticky-media.vue";
import pagePreloader from "./components/common/page-preloader.vue";
import { useThemeSwitcher } from "~/composables/useThemeSwitcher";
useWindowSizeRange();
useThemeSwitcher();
const showPreloader = ref(true);
onMounted(() => {
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:start", () => {
        showPreloader.value = true;
    });
    nuxtApp.hook("page:finish", () => {
        showPreloader.value = false;
    });
});
</script>
<template>
    <div id="app-root">
        <NuxtLoadingIndicator />
        <theHeader />
        <NuxtRouteAnnouncer />
        <NuxtPage />
        <theFooter />
        <theStickyMedia />
        <transition name="fade" mode="out-in">
            <pagePreloader v-if="showPreloader" />
        </transition>
    </div>
</template>

<style>
.constructor-container section {
    position: relative;
    transition: 0.3s;
    *{
        transition: 0.3s;
    }
    .theme-switch {
        position: absolute;
        right: 20px;
        top: 20px;
        padding: 10px;
        background-color: #fff;
        border-radius: 50px;
        display: flex;
        gap: 5px;
        z-index: 1;
        border: 1px solid #ccc;
        transition: 0.3s;
        opacity: 0;
        visibility: hidden;
        div {
            cursor: pointer;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            border: 2px solid #ccc;
        }
    }
    &:hover {
        .theme-switch {
            opacity: 1;
            visibility: visible;
        }
    }
}
</style>
