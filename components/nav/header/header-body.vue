<script setup>
import { useWindowSize } from "@vueuse/core";
import TheThemeCircle from "./the-theme-circle.vue";
const { width } = useWindowSize();

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
                    Розробка корпоративних сайтів та інтернет магазинів
                </div>
                <TheThemeCircle v-if="width > 576" />
            </div>
            <div v-if="width > 1024" class="menu aic">
                <nuxt-link
                    :to="link.url"
                    v-for="(link, idx) in headerMenu"
                    :key="'link' + idx"
                    class="nav-link md text-light"
                    >{{ link.name }}</nuxt-link
                >
            </div>
            <div class="actions-wrapper df">
                <div v-if="width > 576" class="btn fill md">
                    Почати співпрацю
                </div>
                <div v-if="width <= 1024" class="btn tint md icon-menu"></div>
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
    }
}
.header-body {
    gap: var(--header-main-gap-outter,);
    display: grid;
    grid-template-columns: auto auto 175px;
    @include bp-1024 {
        grid-template-columns: 1fr 1fr;
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
</style>
