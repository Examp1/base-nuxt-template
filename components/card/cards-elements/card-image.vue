<template>
    <img :src="path(image)" :alt="imageAlt">
</template>

<script setup>
defineProps({
    image: {
        type: String
    },
    imageAlt: {
        type: String,
        default: 'Default image description'
    },
})
</script>

<style lang="scss" scoped></style>