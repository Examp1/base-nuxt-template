<script setup>
import { defineAsyncComponent } from "vue";
import svgSeparator from "../common/svg-separator.vue";
import appForm from "../form/app-form.vue";

defineProps({
    constructor: {
        type: Object,
        default: () => ({}),
        required: true,
    },
    constructorMainScreen: {
        type: Object,
        default: () => ({}),
    },
});

const asyncComponents = {
    "simple-text": defineAsyncComponent(
        () => import("~/components/constructor/simple-text.vue"),
    ),
    "card-1": defineAsyncComponent(
        () => import("~/components/constructor/card-1.vue"),
    ),
    "card-2": defineAsyncComponent(
        () => import("~/components/constructor/card-2.vue"),
    ),
    "card-4": defineAsyncComponent(
        () => import("~/components/constructor/card-4.vue"),
    ),
    "card-5": defineAsyncComponent(
        () => import("~/components/constructor/card-5.vue"),
    ),
    "cards-galyzi": defineAsyncComponent(
        () => import("~/components/constructor/cards-galyzi.vue"),
    ),
    cta: defineAsyncComponent(() => import("~/components/constructor/cta.vue")),
    "cards-advantages": defineAsyncComponent(
        () => import("~/components/constructor/cards-advantages.vue"),
    ),
    "cards-services": defineAsyncComponent(
        () => import("~/components/constructor/cards-services.vue"),
    ),
    "sisi-dev-cta": defineAsyncComponent(
        () => import("~/components/constructor/sisi-dev-cta.vue"),
    ),
    "spotify-widget": defineAsyncComponent(
        () => import("~/components/constructor/spotify-widget.vue"),
    ),
    gallery: defineAsyncComponent(
        () => import("~/components/constructor/gallery.vue"),
    ),
    accordeon: defineAsyncComponent(
        () => import("~/components/constructor/accordeon.vue"),
    ),
    "text-2-columns": defineAsyncComponent(
        () => import("~/components/constructor/text-2-columns.vue"),
    ),
    "cards-partners": defineAsyncComponent(
        () => import("~/components/constructor/cards-partners.vue"),
    ),
    "quick-inks": defineAsyncComponent(
        () => import("~/components/constructor/quick-inks.vue"),
    ),
    promobar: defineAsyncComponent(
        () => import("~/components/constructor/promobar.vue"),
    ),
    "first-screen": defineAsyncComponent(
        () => import("~/components/first-screens/first-screen.vue"),
    ),
};
</script>

<template>
    <div class="index">
        <div class="main-screen-container">
            <section
                v-for="(
                    { component, visible, content }, idx
                ) in constructorMainScreen"
                :key="`${component}-${idx}`"
                :class="`mt-${content.top_separator} mb-${content.bottom_separator} ${content.preset} block-${component} section-separator-${content.separator_section}`"
            >
                <component
                    :is="asyncComponents[component]"
                    :content="content"
                ></component>
            </section>
        </div>
        <div class="constructor-container">
            <svgSeparator></svgSeparator>
            <div class="block-wrapper bg-light-2">
                <appForm v-if="false"/>
                <section
                    v-for="(
                        { component, visible, content }, idx
                    ) in constructor"
                    :key="`${component}-${idx}`"
                    :class="`mt-${content.top_separator} mb-${content.bottom_separator} ${content.preset} block-${component} section-separator-${content.separator_section}`"
                >
                    <component
                        :is="asyncComponents[component]"
                        :content="content"
                    ></component>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.index {
    .main-screen-container {
        padding-top: 260px;
        padding-bottom: 300px;
        background-color: #000;
        & > section {
            background-color: #000;
        }
        &.active {
            position: fixed;
            z-index: 0;
        }
        @include bp-1440 {
            padding-top: 140px;
            padding-bottom: 0;
        }
    }
    .constructor-container {
        z-index: 2;
        overflow-x: hidden;
        position: relative;
    }
    .simple-text:first-of-type .redactor > * {
        color: var(--text-light);
    }
}
</style>
