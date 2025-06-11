<script setup>
import { storeToRefs } from "pinia";
import HeaderBody from "./header-body.vue";
import HeaderTopSide from "./header-top-side.vue";
import MobileMenu from "~/components/nav/mobile-menu/mobile-menu.vue";
import { useSettingStore } from "~/store/app-settings.js";
import { useModalStore } from "~/store/modal";
const modal = useModalStore();
const { contactSettings, logosSettings, headerMenu, navBarMenu } =
    storeToRefs(useSettingStore());
const stickyHeader = useTemplateRef("sticky-header");

const scrollHandler = () => {
    if (window.scrollY > 0) {
        stickyHeader.value.classList.add("hide-top-side");
    } else {
        stickyHeader.value.classList.remove("hide-top-side");
    }
};

onMounted(() => {
    window.addEventListener("scroll", scrollHandler);
});
onUnmounted(() => {
    window.removeEventListener("scroll", scrollHandler);
});
</script>

<template>
    <header ref="sticky-header">
        <HeaderTopSide
            :contacts-info="contactSettings"
            :nav-menu="navBarMenu"
        ></HeaderTopSide>
        <HeaderBody
            :logos="logosSettings"
            :header-menu="headerMenu"
        ></HeaderBody>
    </header>
    <transition name="slideInRight" mode="out-in">
        <MobileMenu
            v-if="modal.activeModal === 'mobile-menu'"
            :logos="logosSettings"
            :header-menu="headerMenu"
            :contacts-info="contactSettings"
        />
    </transition>
</template>

<style lang="scss" scoped>
header {
    position: sticky;
    z-index: 1000;
    top: 0;
    transition: 0.3s;
    width: 100%;
    &.hide-top-side {
        transform: translateY(-32px);
    }
}
</style>
