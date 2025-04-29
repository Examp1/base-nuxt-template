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
        gap: "xxl",
        titleSize: "xl",
        imageReverse: true,
        imgRounding: "none",
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
        <div class="grid-3-3-2-2-2">
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
:deep(.grid-3-3-2-2-2) {
    .card-header{
        justify-content: end;
    }
    .card-image {
        max-width: 220px;
        img {
            border-radius: unset;
        }
    }
    .reverse{
        justify-content: space-between;
    }
}
</style>
