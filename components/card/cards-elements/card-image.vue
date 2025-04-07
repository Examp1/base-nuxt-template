<template>
    <div class="card-image">
        <img :src="image" :alt="imageAlt" />
    </div>
</template>

<script setup>
defineProps({
    image: {
        type: String,
    },
    imageAlt: {
        type: String,
        default: "Default image description",
    },
});
</script>

<style lang="scss" scoped></style>
