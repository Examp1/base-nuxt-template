<script setup>
import { onMounted, defineAsyncComponent } from "vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    gallery: defineAsyncComponent(
        () => import("~/components/constructor/gallery.vue"),
    ),
    "text-2-columns": defineAsyncComponent(
        () => import("~/components/constructor/text-2-columns.vue"),
    ),
    promobar: defineAsyncComponent(
        () => import("~/components/constructor/promobar.vue"),
    ),
    "first-screen": defineAsyncComponent(
        () => import("~/components/first-screens/first-screen.vue"),
    ),
};

// onMounted(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.to(".constructor-container", {
//         ease: "none",
//         scrollTrigger: {
//             trigger: ".constructor-container",
//             start: "top bottom",
//             end: "bottom bottom",
//             scrub: true,
//             pin: ".main-screen-container",
//             anticipatePin: 1,
//             pinSpacing: false,
//             // markers: true,
//         },
//     });
// });
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
            <div class="separator-container bg-light-2">
                <svg
                    viewBox="0 0 1440 415"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M715.913 380.32C721.342 253.3 650.756 0.458008 324.976 0.458008L0.0869141 0.458008L0.0869141 414.844L1439.91 414.844V0.458008L1115.51 0.458008C789.735 0.458008 719.148 253.3 724.577 380.32H715.913Z"
                        fill="#EBEBF0"
                    />
                </svg>
            </div>
            <div class="block-wrapper bg-light-2">
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
.separator-container {
    width: 100%;
    height: auto;
    margin-bottom: -5px;
    background-color: transparent;
    svg path {
        fill: var(--bg-default);
    }
}
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
