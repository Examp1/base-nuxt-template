<script setup>
import { defineAsyncComponent } from "vue";
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

const componentConstructor = import.meta.glob("@/components/constructor/*.vue");
const componentFirstScreens = import.meta.glob("@/components/first-screens/*.vue");
const modules = {...componentConstructor, ...componentFirstScreens}
const asyncComponents = Object.entries(modules).reduce(
    (map, [path, loader]) => {
        const name = path.split("/").pop().replace(".vue", "");
        map[name] = defineAsyncComponent(loader);
        return map;
    },
    {},
);

</script>

<template>
    <div class="constructor-container">
            <section
                v-for="({ component, visible, content }, idx) in constructor"
                :key="`${component}-${idx}`"
                :class="`mt-${content.top_separator} mb-${content.bottom_separator} ${content.preset} block-${component} section-separator-${content.separator_section}`"
            >
                <component
                    :is="asyncComponents[component]"
                    :content="content"
                ></component>
            </section>
        </div>
</template>

<style lang="scss" scoped>
</style>
