<script setup>
import { ref } from "vue";
import { useSettingStore } from "~/store/app-settings.js";
const { settings } = useSettingStore();
import useUtils from "@/composables/useUtils.js";
const { getMediaPath } = useUtils();
const isClose = ref(false);
</script>

<template>
    <transition name="slideInLeft" mode="out-in">
        <div v-if="!isClose" class="sticky-media">
            <div class="close icon-x" @click="isClose = !isClose"></div>
            <video
                v-if="settings.company_info_video.includes('mp4')"
                autoplay=""
                muted=""
                playsinline=""
                loop=""
                :src="getMediaPath(settings.company_info_video)"
            ></video>
            <img
                v-else
                :src="getMediaPath(settings.company_info_video)"
                alt=""
            />
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
    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
    }
}
</style>
