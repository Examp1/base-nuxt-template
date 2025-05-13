<script setup>
import appButtons from "~/components/common/app-buttons.vue";
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
        ".bg-video",
        { scale: 0.4 },
        {
            scale: 1.2,
            ease: "none",
            scrollTrigger: {
                trigger: ".main-screen-container",
                start: "top top",
                end: "center top",
                scrub: true,
                // markers: true,
                invalidateOnRefresh: true,
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
        <h1 v-html="content.title" class="page-title lg zapfino-font"></h1>
        <div class="bg-video-wrapper">
            <div class="video-overlay"></div>
            <video
                class="bg-video"
                autoplay=""
                muted=""
                playsinline=""
                loop=""
                src="~/assets/video/first-screen-video.mp4"
            ></video>
        </div>
        <appButtons v-if="content?.btns" :btns="content.btns"></appButtons>
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
    width: 100%;
    .video-overlay {
        background-color: rgba(#000, 0.5);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
    video {
        transform: scale(0.4);
    }
}
</style>
