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
        wrapPadding: "xl",
        titleSize: "xxl",
        colorTextSize: "xl",
        hideHeader: true,
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
        <div class="cards-wrapper card-in-row-4 lg">
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
.cards-wrapper:deep {
    .card-body {
        .card-text {
            margin-top: 120px;
        }
    }
}
</style>
