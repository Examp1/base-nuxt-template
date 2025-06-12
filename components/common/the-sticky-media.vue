<script setup>
import { useSettingStore } from "~/store/app-settings.js";
import useUtils from "@/composables/useUtils.js";
import useVideoControl from "@/composables/useVideoControl.js";
const { settings } = useSettingStore();
const { getMediaPath } = useUtils();

const videoRef = useTemplateRef("videoRef");
const { isFullSize, isShow, isPlay, isClose, playOrPause, openOnFullSize } =
    useVideoControl(videoRef);
</script>

<template>
    <transition name="slideInLeft" mode="out-in">
        <div
            v-if="isShow && !isClose"
            class="sticky-media"
            :class="{ 'full-size': isFullSize }"
            @click="openOnFullSize"
        >
            <div
                class="close icon-x"
                @click.self.stop="isClose = !isClose"
            ></div>
            <div
                class="playOrPause"
                :class="isPlay ? 'icon-play-filled' : 'icon-menu-1'"
                @click.self.stop="playOrPause"
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
            <!-- src="https://yescenter.com.ua/yes.mov" -->
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.sticky-media {
    cursor: pointer;
    position: fixed;
    bottom: 30px;
    left: 30px;
    z-index: 500;
    width: 130px;
    height: 180px;
    border-radius: var(--img-radius-md);
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
