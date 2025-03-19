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
        bodyPadding: "md",
        imageReverse: true,
    };
};
</script>

<template>
    <div class="container">
        <AppSectionTitle
            v-if="content?.title"
            :title="content.title"
        ></AppSectionTitle>
        <div class="cards-wrapper card-in-row-4 lg">
            <AppCard
                v-for="(card, idx) in content.cards_list"
                :card="enhanceCard(card)"
                :key="'card' + idx"
            ></AppCard>
            <div class="custom-cards">
                <div class="laravel aic">
                    <img src="~/assets/img/laravel-logo.svg" alt="" />
                </div>
                <div class="wordpress aic">
                    <img src="~/assets/img/wordpres-logo.svg" alt="" />
                </div>
            </div>
        </div>
        <AppButtons v-if="content?.btns" :btns="content.btns"></AppButtons>
    </div>
</template>

<style lang="scss" scoped>
.custom-cards {
    display: flex;
    flex-direction: column;
    gap: var(--card-list-gap-lg);
    height: 100%;
    .laravel,
    .wordpress {
        min-height: 240px;
        height: 100%;
        border-radius: var(--card-border-radius-sm);
        img {
            height: 35px;
        }
    }
    .laravel {
        background: #ff4c30;
    }
    .wordpress {
        background: #00749a;
    }
}
.reverse {
    justify-content: space-between;
}
</style>
