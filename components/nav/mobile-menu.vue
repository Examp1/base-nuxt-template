<script setup>
import { NuxtLink } from "#components";
import { useModalStore } from "~/store/modal";
const modal = useModalStore();
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
                v-for="(li_1_lvl, idx) in headerMenu"
                :key="'li_1_lvl' + idx"
                :is="li_1_lvl.children.length ? 'div' : NuxtLink"
                class="nav-link xl"
                :to="li_1_lvl.url"
            >
                {{ li_1_lvl.name }}
                <i
                    v-if="li_1_lvl.children.length"
                    class="icon-chevron-right"
                ></i>
            </component>
        </div>
        <div class="center">
            <div class="btn fill lg">Почати співпрацю</div>
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
                <nuxt-link
                    :to="link.link"
                    v-for="(link, idx) in contactsInfo.socials"
                    :key="'navMenuLink' + idx"
                    class="nav-link md text-light"
                    >{{ link.type }}</nuxt-link
                >
            </nav>
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
