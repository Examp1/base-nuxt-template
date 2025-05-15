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
        wrapPadding: "lg",
        titleSize: "xl",
        colorTextSize: "xl",
        hideHeader: true,
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
        <div class="cards-wrapper card-in-row-4 lg">
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
    .card-body {
        .card-text {
            margin-top: 120px;
            @include bp-576 {
                margin-top: 48px;
            }
        }
    }
}
:deep(.card) {
    .card-additional-btns {
        margin-top: 20px;
        @include bp-576 {
            margin-bottom: 80px;
        }
    }
}
</style>
