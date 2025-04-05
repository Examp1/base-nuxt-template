<script setup>
import { computed } from "vue";
import AppSectionTitle from "~/components/common/app-section-title.vue";
import AppButtons from "~/components/common/app-buttons.vue";
import AppCard from "~/components/card/app-card.vue";
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
        <AppSectionTitle
            v-if="content?.title"
            :title="content.title"
        ></AppSectionTitle>
        <div class="cards-wrapper card-in-row-5 gap-lg">
            <AppCard
                v-for="(card, idx) in enhancedCards"
                :card="card"
                :key="'card' + idx"
            ></AppCard>
        </div>
        <AppButtons v-if="content?.btns" :btns="content.btns"></AppButtons>
    </div>
</template>

<style lang="scss" scoped>
.card:deep {
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
