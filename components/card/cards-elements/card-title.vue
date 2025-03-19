<template>
    <div class="block-title" :class="[titleSize, titleColorClass]">
        {{ title }}
    </div>
</template>

<script setup>
defineProps({
    title: String,
    titleColorClass: String,
    titleSize: {
        type: String,
        default: 'md'
    },
})
</script>

<style lang="scss" scoped></style>