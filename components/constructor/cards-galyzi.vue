<script setup>
import { computed } from "vue";
import appSectionTitle from "~/components/common/app-section-title.vue";
import appButtons from "~/components/common/app-buttons.vue";
import appCard from "~/components/card/app-card.vue";
const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});
const enhancedCards = computed(() => {
    if (!props.content.cards_list) return;
    return props.content.cards_list.map((card) => ({
        ...card,
        wrapPadding: "sm",
        cardType: "horizontal",
        imgSize: "md",
        imageReverse: true,
        gap: "md",
        hideHeader: !card.image,
        customClass: !card.image ? "centered-content" : null,
    }));
});
</script>

<template>
    <div class="container">
        <appSectionTitle
            v-if="content?.title"
            :title="content.title"
        ></appSectionTitle>
        <div class="cards-wrapper card-in-row-5 gap-lg">
            <appCard
                v-for="(card, idx) in enhancedCards"
                :card="card"
                :key="'card' + idx"
            ></appCard>
        </div>
        <appButtons v-if="content?.btns" :btns="content.btns"></appButtons>
    </div>
</template>

<style lang="scss" scoped>
:deep(.card) {
    .card-body {
        align-items: center;
    }
    .card-header img {
        object-fit: contain;
        border-radius: unset;
        max-height: 80px;
    }
    &.centered-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
