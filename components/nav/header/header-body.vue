<script setup>
import { useWindowSize } from "@vueuse/core";
import TheThemeCircle from "./the-theme-circle.vue";
import { useModalStore } from "~/store/modal";

const { width } = useWindowSize();
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
});
</script>
<template>
    <div class="container sticky-header bg-light">
        <div class="header-logo">
            <img :src="path(logos.header)" alt="" />
        </div>
        <div class="header-body">
            <div class="custom-feature aic">
                <div class="info-text">
                    {{ $t("sisidev-info-text") }}
                </div>
                <TheThemeCircle v-if="false" class="dn-576" />
            </div>
            <div v-if="width > 1024" class="menu aic dn-1024">
                <nuxt-link
                    :to="link.url"
                    v-for="(link, idx) in headerMenu"
                    :key="'link' + idx"
                    class="nav-link md text-light link-1lvl"
                    >{{ link.name }}
                    <div v-if="link.children.length" class="dropdown">
                        <nuxt-link
                            :to="link2lvl.url"
                            v-for="(link2lvl, idx) in link.children"
                            :key="'link' + idx"
                            class="nav-link md text-light link-1lvl"
                            >{{ link2lvl.name }}
                            <div
                                v-if="link2lvl.children.length"
                                class="dropdown"
                            >
                                {{ link2lvl.children }}!
                            </div>
                        </nuxt-link>
                    </div>
                </nuxt-link>
            </div>
            <div class="actions-wrapper df">
                <div v-if="width > 576" class="btn fill md dn-576">
                    Почати співпрацю
                </div>
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
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    height: fit-content;
    /* top: 100%; */
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
        width: 58px;
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
</style>
