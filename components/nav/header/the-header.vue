<script setup>
import { storeToRefs } from "pinia";
import HeaderBody from "./header-body.vue";
import HeaderTopSide from "./header-top-side.vue";
import { useSettingStore } from "~/store/app-settings.js";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const { contactSettings, logosSettings, headerMenu, navBarMenu } =
    storeToRefs(useSettingStore());
</script>

<template>
    <header>
        <HeaderTopSide
            v-if="width > 576"
            :contacts-info="contactSettings"
            :nav-menu="navBarMenu"
        ></HeaderTopSide>
        <HeaderBody
            :logos="logosSettings"
            :header-menu="headerMenu"
        ></HeaderBody>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: relative;
    z-index: 1000;
}
</style>
