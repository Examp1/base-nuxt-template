<script setup>
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
            :src="getPath(video)"
        ></video>
    </div>
</template>

<style lang="scss" scoped></style>
