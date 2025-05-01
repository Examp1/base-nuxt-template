<script setup>
import { computed } from "vue";
import appSectionTitle from "~/components/common/app-section-title.vue";
import appButtons from "~/components/common/app-buttons.vue";
import appCard from "~/components/card/app-card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
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
        wrapPadding: "lg",
        imgSize: "md",
        titleSize: "sm",
        colorTextSize: "xxl",
        // imageReverse: true,
        gap: "md",
        hideHeader: true,
    }));
});

const sliderOptions = {
    spaceBetween: 24,
    centeredSlides: false,
    grabCursor: true,
    watchOverflow: true,
    preventInteractionOnTransition: true,
    resistance: false,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: { slidesPerView: 1.2 },
        1024: { slidesPerView: 2.1 },
        1440: { slidesPerView: 2.9 },
        1600: { slidesPerView: 4 },
    },
};
</script>

<template>
    <div class="container">
        <appSectionTitle
            v-if="content?.title"
            :title="content.title"
            :titlePosition="'center'"
        ></appSectionTitle>
        <swiper v-bind="sliderOptions" :modules="[Autoplay]">
            <!-- <div class="cards-wrapper card-in-row-5 gap-lg"> -->
            <swiper-slide
                class="slide_item"
                v-for="(card, idx) in enhancedCards"
            >
                <appCard :card="card" :key="'card' + idx"></appCard>
            </swiper-slide>
        </swiper>
        <!-- </div> -->
        <appButtons v-if="content?.btns" :btns="content.btns"></appButtons>
    </div>
</template>

<style lang="scss" scoped>
:deep(.card) {
    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        gap: 48px;
    }
}
:deep(.swiper-wrapper) {
    align-items: stretch; // важно!
}

:deep(.swiper-slide) {
    display: flex;
    height: auto !important; // сброс Swiper'а
}
</style>
