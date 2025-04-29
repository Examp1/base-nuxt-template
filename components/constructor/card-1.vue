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
</script>

<template>
    <div class="container">
        <appSectionTitle
            v-if="content?.title"
            :title="content.title"
        ></appSectionTitle>
        <div
            class="cards-wrapper"
            :class="[`card-in-row-${content.card_in_row}`, content.cards_gap]"
        >
            <appCard
                v-for="(card, idx) in content.cards_list"
                :card="card"
                :key="'card' + idx"
            ></appCard>
        </div>
        <appButtons v-if="content?.btns" :btns="content.btns"></appButtons>
    </div>
</template>

<style lang="scss" scoped></style>
