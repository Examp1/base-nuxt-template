<script setup>
import appSectionTitle from "~/components/common/app-section-title.vue";
import appButtons from "~/components/common/app-buttons.vue";
import appCard from "~/components/card/app-card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
defineProps({
    content: {
        type: Object,
        required: true,
    },
});
const sliderOptions = {
    spaceBetween: 24,
    centeredSlides: false,
    grabCursor: true,
    watchOverflow: true,
    preventInteractionOnTransition: true,
    resistance: false,
    breakpoints: {
        576: { slidesPerView: 1.3 },
        768: { slidesPerView: 2.3 },
        1024: { slidesPerView: 3.2 },
        1440: { slidesPerView: 4 },
    },
};

const enhanceCard = (cardObj) => {
    return {
        ...cardObj,
        bodyPadding: "none",
        noBg: true,
        gap: "md",
        imageReverse: true,
        imgRounding: "md",
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
            <Swiper v-bind="sliderOptions">
                <SwiperSlide v-for="(card, idx) in content.cards_list">
                    <appCard
                        :card="enhanceCard(card)"
                        :key="'card' + idx"
                    ></appCard>
                </SwiperSlide>
            </Swiper>
        </div>
        <appButtons v-if="content?.btns" :btns="content.btns"></appButtons>
    </div>
</template>

<style lang="scss" scoped></style>
