<script setup>
import { computed } from "vue";
import appCard from "~/components/card/app-card.vue";

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
        backgroundImage: getPath(props.content.image),
        wrapPadding: "xxl",
        customClass: "bg-dark cta-card",
        titleSize: "xxxxl",
        textSize: "sm",
        hideHeader: true,
        btns: arrayWithKeys,
    };
});
</script>
<template>
    <div class="container">
        <appCard :card="cardOption"></appCard>
    </div>
</template>
<style lang="scss" scoped>
:deep(.cta-card) {
    .card-body {
        max-width: 390px;
    }
    .card-info {
        gap: 48px !important;
    }
}
</style>
