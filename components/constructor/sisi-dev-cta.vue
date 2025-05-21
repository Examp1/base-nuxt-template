<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import getSpriteImage from "@/utils/getSpriteImage";
import appCard from "~/components/card/app-card.vue";
import { useSettingStore } from "~/store/app-settings.js";
import useUtils from "@/composables/useUtils.js";
import useVideoControl from "@/composables/useVideoControl.js";

const { settings } = useSettingStore();
const { getMediaPath } = useUtils();
// import SvgSeparator from "../common/svg-separator.vue";

const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});
// const isShow = ref(false);
// let SisiDevCtaBlock;
const arrayWithKeys = Object.values(props.content.btns).map((value) => ({
    ...value,
}));
const cardOption = computed(() => {
    return {
        title: props.content.title,
        text: props.content.text,
        image: getSpriteImage("sisi-dev-logo"),
        wrapPadding: "xxl",
        titleSize: "xxxl",
        textSize: "lg",
        customImage: true,
        gap: "xl",
        contentPosition: "center",
        btns: arrayWithKeys,
    };
});
const videoRef = useTemplateRef("videoRef");
const { isFullSize, isShow, isPlay, playOrPause, openOnFullSize } =
    useVideoControl(videoRef, true);
</script>

<template>
    <!-- <SvgSeparator></SvgSeparator> -->
    <div class="container-sm">
        <transition name="slideInLeft" mode="out-in">
            <div v-if="isShow" class="cta-media" :class="{ 'full-size': isFullSize }">
                <div
                    class="playOrPause"
                    :class="isPlay ? 'icon-play-filled' : 'icon-menu-1'"
                    @click.self.stop="playOrPause"
                ></div>
                <video
                    ref="videoRef"
                    autoplay=""
                    muted=""
                    playsinline=""
                    loop=""
                    class="cta-video"
                    @click.self="openOnFullSize"
                    :src="getMediaPath(settings.company_info_video)"
                ></video>
            </div>
        </transition>
        <appCard :card="cardOption"></appCard>
    </div>
</template>

<style lang="scss" scoped>
:deep(.card) {
    .card-image img {
        max-width: 115px;
    }
}
.container-sm {
    position: relative;
}
.cta-media {
    cursor: pointer;
    position: absolute;
    top: -130px;
    left: 60px;
    z-index: 100;
    z-index: 500;
    width: 130px;
    height: 180px;
    border-radius: 12px;
    transition: 0.3s;
    &:not(.full-size):hover {
        transform: scale(1.2);
    }
    &.full-size {
        width: 250px;
        height: 400px;
    }
    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
        z-index: 1;
    }
    .playOrPause {
        position: absolute;
        top: 10px;
        right: 30px;
        color: #fff;
        z-index: 1;
        &.icon-menu-1 {
            transform: rotate(90deg);
        }
    }
    video {
        object-fit: cover;
    }
}
</style>
