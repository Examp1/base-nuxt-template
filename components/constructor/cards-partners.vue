<script setup>
import AppSectionTitle from "~/components/common/app-section-title.vue";
import AppButtons from "~/components/common/app-buttons.vue";
import AppCard from "~/components/card/app-card.vue";
defineProps({
    content: {
        type: Object,
        required: true,
    },
});

const enhanceCard = (cardObj) => {
    return {
        ...cardObj,
        cardType: "horizontal",
        wrapPadding: "lg",
        gap: "xxl-xl",
        bodyDirection: "horizontal",
        imgSize: "xl",
        titleSize: "xl",
        adaptive: true,
    };
};
</script>

<template>
    <div class="container">
        <AppSectionTitle
            :title-position="'tac'"
            v-if="content?.title"
            :title="content.title"
        ></AppSectionTitle>
        <div class="cards-wrapper card-in-row-1 none">
            <AppCard
                v-for="(card, idx) in content.cards_list"
                :card="enhanceCard(card)"
                :key="'card' + idx"
            ></AppCard>
        </div>
        <AppButtons v-if="content?.btns" :btns="content.btns"></AppButtons>
    </div>
</template>

<style lang="scss" scoped>
.reverse {
    justify-content: space-between;
}
:deep(.cards-wrapper) {
    .card {
        border-radius: var(--card-border-radius-lg);
        .body-direction-horizontal {
            align-items: start !important;
            @include bp-768 {
                text-align: left;
                .card-additional-btn {
                    display: flex;
                    justify-content: end;
                }
            }
        }
    }
}
</style>
