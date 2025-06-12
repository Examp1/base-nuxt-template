<script setup>
import { defineAsyncComponent } from "vue";
import svgSeparator from "../common/svg-separator.vue";
import { useThemeSwitcher } from "~/composables/useThemeSwitcher";
useThemeSwitcher();
const route = useRoute();
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

const modules = import.meta.glob("@/components/constructor/*.vue");

const asyncComponents = Object.entries(modules).reduce(
    (map, [path, loader]) => {
        const name = path.split("/").pop().replace(".vue", "");
        map[name] = defineAsyncComponent(loader);
        return map;
    },
    {},
);

const firstScrennComponents = {
    "first-screen": defineAsyncComponent(
        () => import("~/components/first-screens/first-screen.vue"),
    ),
};
</script>

<template>
    <div
        v-if="Object.keys(constructorMainScreen).length"
        class="main-screen-container"
    >
        <section
            v-for="(
                { component, visible, content }, idx
            ) in constructorMainScreen"
            :key="`${component}-${idx}`"
            :class="`mt-${content.top_separator} mb-${content.bottom_separator} ${content.preset} block-${component} section-separator-${content.separator_section}`"
        >
            <component
                :is="firstScrennComponents[component]"
                :content="content"
            ></component>
        </section>
    </div>
    <div class="constructor-container">
        <svgSeparator
            v-if="Object.keys(constructorMainScreen).length"
        ></svgSeparator>
        <div
            class="block-wrapper"
            :class="route.name.includes('index') ? ' bg-light-2' : ' bg-none'"
        >
            <template
                v-for="({ component, visible, content }, idx) in constructor"
                :key="`${component}-${idx}`"
            >
                <section
                    v-if="+visible === 1"
                    :class="`mt-${content.top_separator} mb-${content.bottom_separator} ${content.preset} block-${component} section-separator-${content.separator_section}`"
                >
                    <component
                        :is="asyncComponents[component]"
                        :content="content"
                    ></component>
                </section>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.index {
    .main-screen-container {
        padding-top: 260px;
        padding-bottom: 0px;
        background-color: #000;
        overflow: hidden;
        position: fixed;
        inset: 0;
        height: 100vh;

        & > section {
            background-color: #000;
        }
        &.active {
            position: fixed;
            z-index: 0;
        }
        @include bp-1440 {
            padding-top: 90px;
            padding-bottom: 0;
        }
        @include bp-768 {
            height: auto;
            position: static;
            padding-top: 140px;
            padding-bottom: 200px;
            margin-top: -111px;
        }
    }
    .constructor-container {
        z-index: 2;
        overflow-x: hidden;
        position: relative;
        margin-top: 90vh;
        @include bp-768 {
            margin-top: -200px;
        }
    }
    .simple-text:first-of-type .redactor > * {
        color: var(--text-light);
    }
}
</style>
