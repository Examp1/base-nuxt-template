<template>
    <div class="card-text block-text" :class="[textSize, textColorClass]">
        {{ text }}
    </div>
</template>

<script setup>
defineProps({
    text: String,
    textColorClass: String,
    textSize: {
        typeof: String,
        default: 'md',
    },
})
</script>

<style lang="scss" scoped></style>