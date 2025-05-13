<script setup>
import { ref } from "vue";
import { NuxtLink } from "#components";
import { useSettingStore } from "~/store/app-settings.js";
import { useModalStore } from "~/store/modal";
import langSwitcherRow from "../lang-switchers/lang-switcher-row.vue";
import appButton from "~/components/common/app-button.vue";
import otherLvlMenu from "./other-lvl-menu.vue";
const modal = useModalStore();
const { settings } = storeToRefs(useSettingStore());
let otherMenuLvl = ref(null);
defineProps({
    logos: {
        type: Object,
        default: () => {},
    },
    headerMenu: {
        type: Object,
        default: () => {},
    },
    contactsInfo: {
        type: Object,
        default: () => {},
    },
});
</script>

<template>
    <div class="mobile-menu bg-light">
        <div class="mobile-menu-header">
            <div class="logo">
                <img :src="path(logos.header)" alt="sisi.dev logo" />
            </div>
            <div class="info-text">
                {{ $t("sisidev-info-text") }}
            </div>
            <div class="btn tint md icon-x" @click="modal.closeModal()"></div>
        </div>
        <div class="mobile-menu-body">
            <component
                v-for="(li, idx) in headerMenu"
                :key="'li' + idx"
                :is="li.children.length ? 'div' : NuxtLink"
                class="nav-link xl"
                :to="li.url"
                @click="otherMenuLvl = li"
            >
                {{ li.name }}
                <i v-if="li.children.length" class="icon-chevron-right"></i>
            </component>
            <transition name="slideInRight" mode="out-in">
                <otherLvlMenu
                    v-if="otherMenuLvl"
                    :menu="otherMenuLvl"
                    @closeOtherLvlMenu="otherMenuLvl = null"
                />
            </transition>
        </div>
        <div class="center">
            <appButton
                :btn="{
                    ...settings.head_btn,
                    size: 'lg',
                    type: 'fill',
                    type_link: 'form',
                }"
            ></appButton>
        </div>
        <div class="mobile-menu-footer">
            <a
                v-if="contactsInfo.phone?.[0]"
                :href="`tel:${contactsInfo.phone[0].number}`"
                class="nav-link sm text-light"
                >{{ contactsInfo.phone[0].title }}</a
            >
            <div class="block-text sm-m text-light" v-if="contactsInfo.address">
                {{ contactsInfo.address }}
            </div>
            <div
                class="block-text sm-m text-light"
                v-if="contactsInfo.schedule?.[0].title"
            >
                {{ contactsInfo.schedule[0].title }}
                {{ contactsInfo.schedule[0].time }}
            </div>
            <nav class="socials" v-if="contactsInfo.socials">
                <NuxtLink
                    :to="link.link"
                    v-for="(link, idx) in contactsInfo.socials"
                    :key="'navMenuLink' + idx"
                    class="nav-link md text-light"
                    >{{ link.type }}</NuxtLink
                >
            </nav>
            <langSwitcherRow />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mobile-menu {
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
        .logo {
            img {
                width: 48px;
                border-radius: unset;
            }
        }
        .info-text {
            color: var(--text-default);
            font-size: 13px;
            font-style: italic;
            font-weight: 400;
            line-height: 116%;
            letter-spacing: -0.154px;
        }
    }
    .mobile-menu-body {
        padding: 48px var(--header-main-padding-x) 0px
            var(--header-main-padding-x);
        display: grid;
        .nav-link {
            display: flex;
            justify-content: space-between;
        }
    }
    .center {
        padding: 80px 0px;
    }
    .mobile-menu-footer {
        text-align: center;
        display: grid;
        gap: var(--header-top-gap-outter);
    }
}
</style>
