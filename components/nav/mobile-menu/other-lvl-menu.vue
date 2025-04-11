<script setup>
import { NuxtLink } from "#components";
import { useModalStore } from "~/store/modal";
const modal = useModalStore();
defineProps({
    menu: {
        type: Object,
        default: () => {},
    },
});
defineEmits(["closeOtherLvlMenu"]);
</script>

<template>
    <div class="mobile-menu bg-light">
        <div class="mobile-menu-header">
            <i
                class="icon-chevron-left"
                @click="$emit('closeOtherLvlMenu')"
            ></i>
            <div class="btn tint md icon-x" @click="modal.closeModal()"></div>
        </div>
        <div class="mobile-menu-body">
            <nuxtLink :to="menu.url" class="block-text md disabled-text">{{
                menu.name
            }}</nuxtLink>
            <component
                v-for="(li, idx) in menu.children"
                :key="'li' + idx"
                :is="li.children?.length ? 'div' : NuxtLink"
                class="nav-link xl"
                :to="li.url"
            >
                {{ li.name }}
                <i v-if="li.children?.length" class="icon-chevron-right"></i>
            </component>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mobile-menu {
    will-change: transform;
    position: fixed;
    inset: 0;
    background-color: var(--header-main-bg);
    z-index: 1001;
    padding: var(--header-main-padding-x);
    .mobile-menu-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--header-main-gap-outter);
    }
    .mobile-menu-body {
        padding:  var(--header-main-padding-x);
        display: grid;
        .nav-link {
            display: flex;
            justify-content: space-between;
        }
    }
    .disabled-text {
        text-align: center;
    }
}
</style>
