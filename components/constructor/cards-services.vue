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
        wrapPadding: "lg",
        gap: "xxl",
        titleSize: "xl",
        imageReverse: true,
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
        <div class="grid-3-3-2-2-2">
            <AppCard
                v-for="(card, idx) in content.cards_list"
                :card="enhanceCard(card)"
                :key="'card' + idx"
            ></AppCard>
        </div>
        <AppButtons v-if="content?.btns" :btns="content.btns"></AppButtons>
    </div>
</template>

<style lang="scss" scoped></style>
