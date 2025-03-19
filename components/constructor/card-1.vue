<script setup>
import AppSectionTitle from '~/components/common/app-section-title.vue';
import AppButtons from '~/components/common/app-buttons.vue'
import AppCard from '~/components/card/app-card.vue';
defineProps({
    content: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="container">
        <AppSectionTitle v-if="content?.title" :title="content.title"></AppSectionTitle>
        <div class="cards-wrapper" :class="[`card-in-row-${content.card_in_row}`, content.cards_gap ]">
            <AppCard v-for="(card, idx) in content.cards_list" :card="card" :key="'card'+idx"></AppCard>
        </div>
        <AppButtons v-if="content?.btns" :btns="content.btns"></AppButtons>
    </div>
</template>

<style lang="scss" scoped></style>