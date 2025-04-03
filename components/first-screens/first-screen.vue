<script setup>
import AppButtons from "~/components/common/app-buttons.vue";
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
        ".bg-video",
        { scale: 0.4 },
        {
            scale: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".first-screen", // триггер - родительский контейнер
                start: "top top", // начинаем при достижении верха first-screen
                end: () =>
                    document.querySelector(".constructor-container").offsetTop, // заканчиваем у constructor-container
                scrub: true,
                markers: true,
                invalidateOnRefresh: true, // важно для пересчёта при изменении размера страницы
            },
        },
    );
});

defineProps({
    content: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <div class="first-screen container">
        <h1 v-html="content.title" class="page-title lg zapfino-font"></h1>!
        <div class="bg-video-wrapper">
            <video
                class="bg-video"
                autoplay=""
                muted=""
                playsinline=""
                loop=""
                src="~/assets/video/first-screen-video.mp4"
            ></video>
        </div>
        <AppButtons v-if="content?.btns" :btns="content.btns"></AppButtons>
    </div>
</template>

<style lang="scss" scoped>
.first-screen {
    @media (min-width: 1366px) {
        aspect-ratio: 2.13;
    }
    *:not(.bg-video-wrapper) {
        z-index: 1;
        position: relative;
    }
}
.bg-video-wrapper {
    position: fixed;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1.4;
    video {
        /* transform: scale(0.4); */
    }
}
</style>
