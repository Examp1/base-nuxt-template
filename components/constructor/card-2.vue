<script setup>
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import appSectionTitle from "~/components/common/app-section-title.vue";
import appButtons from "~/components/common/app-buttons.vue";
import appCard from "~/components/card/app-card.vue";
import getSpriteImage from "@/utils/getSpriteImage";

const { width } = useWindowSize();

const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});

const enhancedCards = computed(() => {
    if (!props.content.cards_list) return;
    return props.content.cards_list.map((card) => ({
        ...card,
        bodyPadding: "md",
        titleSize: "lg",
        imageReverse: width.value > 576,
        cardType: width.value > 576 ? "vertical" : "horizontal",
        imgRounding: "none",
    }));
});
</script>

<template>
    <div class="container">
        <appSectionTitle
            v-if="content?.title"
            :title="content.title"
        ></appSectionTitle>
        <div class="cards-wrapper card-in-row-4 lg">
            <appCard
                v-for="(card, idx) in enhancedCards"
                :card="card"
                :key="'card' + idx"
            ></appCard>
            <div class="custom-cards">
                <div class="laravel aic">
                    <img :src="getSpriteImage('laravel-logo')" alt="" />
                </div>
                <div class="wordpress aic">
                    <img :src="getSpriteImage('wordpres-logo')" alt="" />
                </div>
            </div>
        </div>
        <appButtons v-if="content?.btns" :btns="content.btns"></appButtons>
    </div>
</template>

<style lang="scss" scoped>
.card {
    @include bp-576 {
        grid-template-columns: 100px auto;
    }
}
.container > * {
    position: relative;
    z-index: 1;
}
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
        position: relative;
        min-height: 190px;
        height: 100%;
        border-radius: var(--card-border-radius-sm);
        img {
            height: 45px;
        }
        @include bp-1024 {
            grid-column: 130px;
        }
        @include bp-576 {
             min-height: 90px;
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
</style>
