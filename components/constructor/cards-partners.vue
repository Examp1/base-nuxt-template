<script setup>
import appSectionTitle from "~/components/common/app-section-title.vue";
import appButtons from "~/components/common/app-buttons.vue";
import appCard from "~/components/card/app-card.vue";
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
        <appSectionTitle
            :title-position="'tac'"
            v-if="content?.title"
            :title="content.title"
        ></appSectionTitle>
        <div class="cards-wrapper card-in-row-1 none">
            <appCard
                v-for="(card, idx) in content.cards_list"
                :card="enhanceCard(card)"
                :key="'card' + idx"
            ></appCard>
        </div>
        <appButtons v-if="content?.btns" :btns="content.btns"></appButtons>
    </div>
</template>

<style lang="scss" scoped>
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
        .card-image img{
            object-fit: contain;
        }
        .card-header{
            justify-content: start;
        }
    }
}
</style>
