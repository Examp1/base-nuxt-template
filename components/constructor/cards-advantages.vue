<script setup>
import { computed } from "vue";
import AppSectionTitle from "~/components/common/app-section-title.vue";
import AppButtons from "~/components/common/app-buttons.vue";
import AppCard from "~/components/card/app-card.vue";
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
        1024: { slidesPerView: 3.1 },
        1440: { slidesPerView: 4 },
        1600: { slidesPerView: 5 },
    },
};

const enhancedCards = computed(() => {
    if (!props.content.cards_list) return;
    return props.content.cards_list.map((card) => ({
        ...card,
        wrapPadding: "lg",
        gap: "xl",
        imageReverse: true,
    }));
});
</script>

<template>
    <div class="container">
        <AppSectionTitle
            v-if="content?.title"
            :title="content.title"
        ></AppSectionTitle>
    </div>
    <div class="container-fluid">
        <swiper v-bind="sliderOptions" :modules="[Autoplay]">
            <swiper-slide
                class="slide_item"
                v-for="(card, idx) in enhancedCards"
                :key="idx"
            >
                <AppCard :card="card" :key="'card' + idx"></AppCard>
            </swiper-slide>
        </swiper>
        <AppButtons v-if="content?.btns" :btns="content.btns"></AppButtons>
    </div>
</template>

<style lang="scss" scoped>
.card:deep {
    .card-header {
        img {
            aspect-ratio: 0.55;
            object-fit: cover;
        }
    }
}
</style>
