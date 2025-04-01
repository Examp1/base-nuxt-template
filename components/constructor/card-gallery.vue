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
        380: { slidesPerView: 1.2 },
        576: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 4.5 },
    },
};

const enhancedCards = computed(() => {
    return props.content.cards_list.map((card) => ({
        ...card,
        bodyPadding: "none",
        noBg: true,
        gap: "md",
    }));
});
</script>

<template>
    <div :class="content.gallery_size">
        <AppSectionTitle
            v-if="content?.title"
            :title="content.title"
        ></AppSectionTitle>
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
