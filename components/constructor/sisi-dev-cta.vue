<script setup>
import { computed } from "vue";
import getSpriteImage from "@/utils/getSpriteImage";
import AppCard from "~/components/card/app-card.vue";
// import SvgSeparator from "../common/svg-separator.vue";

const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});
const arrayWithKeys = Object.values(props.content.btns).map((value) => ({
    ...value,
}));
const cardOption = computed(() => {
    return {
        title: props.content.title,
        text: props.content.text,
        image: getSpriteImage("sisi-dev-logo"),
        wrapPadding: "xxl",
        titleSize: "xxxl",
        textSize: "lg",
        customImage: true,
        gap: "xl",
        contentPosition: "center",
        btns: arrayWithKeys,
    };
});
</script>

<template>
    <!-- <SvgSeparator></SvgSeparator> -->
    <div class="container-sm">
        <AppCard :card="cardOption"></AppCard>
    </div>
</template>

<style lang="scss" scoped>
:deep(.card) {
    .card-image img {
        max-width: 115px;
    }
}
</style>
