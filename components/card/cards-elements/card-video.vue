<script setup>
import useUtils from "@/composables/useUtils.js";
const { getMediaPath } = useUtils();
defineProps({
    video: {
        type: String,
    },
});
</script>

<template>
    <div class="card-image">
        <video
            autoplay=""
            muted=""
            playsinline=""
            loop=""
            :src="getMediaPath(video)"
        ></video>
    </div>
</template>

<style lang="scss" scoped></style>
