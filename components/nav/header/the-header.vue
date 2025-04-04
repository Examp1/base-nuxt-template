<script setup>
import HeaderBody from "./header-body.vue";
import HeaderTopSide from "./header-top-side.vue";
import { useSettingStore } from "~/store/app-settings.js";

const { contactSettings, logosSettings, headerMenu, navBarMenu } =
    storeToRefs(useSettingStore());

</script>

<template>
    <header>
        <HeaderTopSide
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
    z-index: 1;
}
</style>
