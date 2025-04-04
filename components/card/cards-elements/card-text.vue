<template>
    <div
        class="card-text block-text"
        :class="[textSize, textColorClass]"
        v-html="text"
    ></div>
</template>

<script setup>
defineProps({
    text: String,
    textColorClass: String,
    textSize: {
        typeof: String,
        default: "md",
    },
});
</script>

<style lang="scss" scoped></style>
