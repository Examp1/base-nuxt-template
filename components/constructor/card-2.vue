<script setup>
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import AppSectionTitle from "~/components/common/app-section-title.vue";
import AppButtons from "~/components/common/app-buttons.vue";
import AppCard from "~/components/card/app-card.vue";

const { width } = useWindowSize();

const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});

const enhancedCards = computed(() => {
    return props.content.cards_list.map((card) => ({
        ...card,
        bodyPadding: "md",
        imageReverse: width.value > 576,
        cardType: width.value > 576 ? "vertical" : "horizontal",
    }));
});
</script>

<template>
    <div class="container">
        <AppSectionTitle
            v-if="content?.title"
            :title="content.title"
        ></AppSectionTitle>
        <div class="cards-wrapper card-in-row-4 lg">
            <AppCard
                v-for="(card, idx) in enhancedCards"
                :card="card"
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
.card-in-row-4 {
    grid-template-columns: repeat(4, 1fr);
    @include bp-1024 {
        grid-template-columns: repeat(3, 1fr);
    }
    @include bp-768 {
        grid-template-columns: repeat(3, 1fr);
    }
    @include bp-576 {
        grid-template-columns: 1fr;
    }
}
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
        @include bp-1024 {
            grid-column: 130px;
        }
    }
    .laravel {
        background: #ff4c30;
    }
    .wordpress {
        background: #00749a;
    }
    @include bp-1024 {
        grid-column: 1/-1;
    }
}
.reverse {
    justify-content: space-between;
}
</style>
