<script setup>
import { onMounted, ref, watch } from "vue";
import { useNuxtApp } from "#app";
import { useWindowSizeRange } from "~/composables/useWindowSizeRange";
import theHeader from "./components/nav/header/the-header.vue";
import theFooter from "./components/nav/footer/the-footer.vue";
import theStickyMedia from "./components/common/the-sticky-media.vue";
import pagePreloader from "./components/common/page-preloader.vue";
import { useSettingStore } from "~/store/app-settings.js";
const { locale } = useI18n();
const { loadSettings, loadMenus } = useSettingStore();
loadSettings(locale.value);
loadMenus(locale.value);
watch(locale, () => {
    loadSettings(locale.value);
    loadMenus(locale.value);
});
useWindowSizeRange();
const isPageReady = ref(false);
const route = useRoute();

onMounted(() => {
    const nuxtApp = useNuxtApp();
    nuxtApp.hook("page:start", () => {
        isPageReady.value = false;
    });
    nuxtApp.hook("page:finish", () => {
        isPageReady.value = true;
    });
});
</script>
<template>
    <div id="app-root">
        <NuxtLoadingIndicator />
        <theHeader />
        <NuxtRouteAnnouncer />
        <!-- <transition name="fade" mode="out-in"> -->
        <NuxtPage :key="route.fullPath" />
        <!-- </transition> -->
        <theFooter />
        <theStickyMedia />
        <transition name="fade" mode="out-in">
            <pagePreloader v-if="!isPageReady" />
        </transition>
    </div>
</template>

<style>
.constructor-container section {
    position: relative;
    transition: 0.3s;
    * {
        transition: 0.3s;
    }
    .theme-switch {
        position: absolute;
        right: 20px;
        top: 20px;
        padding: 2px;
        background-color: #fff;
        border-radius: 50px;
        display: flex;
        gap: 5px;
        z-index: 1;
        border: 1px solid #ccc;
        transition: 0.3s;
        overflow: hidden;
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
    svg {
        [data-theme="bg-light"] {
            fill: #ffffff;
        }
        [data-theme="bg-light-2"] {
            fill: #ebebf0;
        }
        [data-theme="bg-dark"] {
            fill: #1c1c1e;
        }
        [data-theme="bg-color"] {
            fill: #ff4c30;
        }
        path {
            transition: 0.3s;
            cursor: pointer;
        }
        path:hover {
            transform-origin: center;
            transform: scale(1.2);
        }
    }
}
</style>
