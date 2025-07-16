<script setup>
import { NuxtLink } from "#components";
import { useWindowSize } from "@vueuse/core";
import TheThemeCircle from "./the-theme-circle.vue";
import { useModalStore } from "~/store/modal";
import { useSettingStore } from "~/store/app-settings.js";
import appButton from "~/components/common/app-button.vue";
const { settings } = storeToRefs(useSettingStore());
const { width } = useWindowSize();
const modal = useModalStore();
const route = useRoute();
const localePath = useLocalePath()
defineProps({
    logos: {
        type: Object,
        default: () => {},
    },
    headerMenu: {
        type: Object,
        default: () => {},
    },
});
</script>
<template>
    <div class="container sticky-header bg-light">
        <component
            :is="route.name.includes('index') ? 'div' : NuxtLink"
            :to="localePath('/test-page')"
            class="header-logo"
        >
            <img :src="getPath(logos.header)" alt="" />
        </component>
        <div class="header-body">
            <div class="custom-feature aic">
                <div class="info-text">
                    {{ $t("sisidev-info-text") }}
                </div>
                <TheThemeCircle v-if="false" class="dn-576" />
            </div>
            <div v-if="width > 1024" class="menu aic dn-1024">
                <NuxtLink
                    :to="link.url"
                    v-for="(link, idx) in headerMenu"
                    :key="'link' + idx"
                    class="nav-link md text-light link-1lvl"
                    >{{ link.name }}
                    <div v-if="link.children.length" class="dropdown">
                        <NuxtLink
                            :to="link2lvl.url"
                            v-for="(link2lvl, idx) in link.children"
                            :key="'link' + idx"
                            class="nav-link md text-light link-1lvl"
                            >{{ link2lvl.name }}
                            <div
                                v-if="link2lvl.children.length"
                                class="dropdown"
                            >
                                {{ link2lvl.children }}
                            </div>
                        </NuxtLink>
                    </div>
                </NuxtLink>
            </div>
            <div class="actions-wrapper df">
                <div class="dn-576">
                    <appButton
                        v-if="width > 576"
                        :btn="{
                            ...settings.head_btn,
                            size: 'md',
                            type: 'sisi-dev',
                            type_link: 'form',
                        }"
                    ></appButton>
                </div>
                <!-- <div  class="btn fill md dn-576">
                    {{ head_btn.name || 'Почати співпрацю' }}
                </div> -->
                <div
                    v-if="width <= 1024"
                    class="btn tint md icon-menu"
                    @click="modal.openModal('mobile-menu')"
                ></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sticky-header {
    display: grid;
    grid-template-columns: 90px auto;
    background: transparent;
    z-index: 100;
    height: fit-content;
    transition: 0.3s;
    width: 100%;
    margin-top: 13px;
    @include bp-576 {
        grid-template-columns: 80px auto;
    }
}
.header-body,
.header-logo {
    border-radius: var(--header-main-border-radius-md);
    background: var(--header-main-bg);
    height: var(--header-main-height);
    padding: 10px var(--header-main-padding-x);
}
.header-logo {
    img {
        height: 58px;
        object-fit: contain;
        border-radius: unset;
        @include bp-576 {
            height: 48px;
        }
    }
}
.header-body {
    gap: var(--header-main-gap-outter,);
    display: grid;
    grid-template-columns: auto auto 175px;
    @include bp-1024 {
        grid-template-columns: 1fr auto;
    }
    .info-text {
        color: var(--text-default);
        font-size: 13px;
        font-style: italic;
        font-weight: 400;
        line-height: 116%;
        letter-spacing: -0.154px;
        max-width: 170px;
    }
    .custom-feature {
        gap: 16px;
    }
    .actions-wrapper {
        gap: 4px;
        @include bp-1024 {
            justify-content: end;
        }
    }
}
.link-1lvl {
    position: relative;
    .dropdown {
        position: absolute;
        border-radius: var(--drop-menu-radius-sm);
        border: 1px solid var(--drop-menu-border);
        background: var(--drop-menu-bg);
        padding: var(--drop-menu-wrap-padding-lg);
        transition: 0.3s;
        height: 0;
        opacity: 0;
    }
    &:hover {
        .dropdown {
            height: auto;
            opacity: 1;
        }
    }
}
.menu {
    justify-content: flex-end;
}
</style>
