<script setup>
import { storeToRefs } from "pinia";
import HeaderBody from "./header-body.vue";
import HeaderTopSide from "./header-top-side.vue";
import MobileMenu from "~/components/nav/mobile-menu.vue";
import { useSettingStore } from "~/store/app-settings.js";
import { useModalStore } from "~/store/modal";

const modal = useModalStore();

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
    <MobileMenu
        v-if="modal.activeModal === 'mobile-menu'"
        :logos="logosSettings"
        :header-menu="headerMenu"
        :contacts-info="contactSettings"
    />
</template>

<style lang="scss" scoped>
header {
    position: relative;
    z-index: 1000;
}
</style>
