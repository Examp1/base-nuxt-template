<script setup>
import { ref } from "vue";
import { useSettingStore } from "~/store/app-settings.js";
const { settings } = useSettingStore();
import useUtils from "@/composables/useUtils.js";
const { getMediaPath } = useUtils();
const isClose = ref(false);
const isFullSize = ref(false)

const videoRef = useTemplateRef("videoRef");
const isPlay = ref(true);

const playOrPause = () => {
    isPlay.value = !isPlay.value;
    if (isPlay.value) {
        // isPlay.value = false;
        pauseVideo();
    } else {
        // isPlay.value = true;
        playVideo();
    }
};

const playVideo = () => {
    videoRef.value?.play();
};

const pauseVideo = () => {
    videoRef.value?.pause();
};
const openOnFullSize = () => {
    isFullSize.value = !isFullSize.value
    if (videoRef.value) {
        videoRef.value.muted = false;
        videoRef.value.volume = 1;
    }
}
</script>

<template>
    <transition name="slideInLeft" mode="out-in">
        <div v-if="!isClose" class="sticky-media" :class="{'full-size': isFullSize}" @click="openOnFullSize">
            <div class="close icon-x" @click="isClose = !isClose"></div>
            <div
                class="playOrPause"
                :class="isPlay ? 'icon-menu-1' : 'icon-play-filled'"
                @click.stop="playOrPause"
            ></div>
            <img
                v-if="
                    settings.company_info_video.includes('jpg') ||
                    settings.company_info_video.includes('png') ||
                    settings.company_info_video.includes('webp')
                "
                :src="getMediaPath(settings.company_info_video)"
                alt=""
            />
            <video
                v-else
                ref="videoRef"
                autoplay=""
                muted=""
                playsinline=""
                loop=""
                :src="getMediaPath(settings.company_info_video)"
            ></video>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.sticky-media {
    cursor: pointer;
    position: fixed;
    bottom: 30px;
    left: 30px;
    z-index: 100;
    z-index: 111;
    width: 130px;
    height: 180px;
    border-radius: var(--img-radius-md);
    transition: .3s;
    &:not(.full-size):hover{
        transform: scale(1.2);
    }
    &.full-size{
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
