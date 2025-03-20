<script setup>
defineProps({
    titleType: {
        type: String,
        default: "h2",
    },
    class: {
        type: String,
        default: "section-title",
    },
    titleSize: {
        type: String,
        default: "lg",
    },
    title: {
        type: String,
        required: true,
    },
    titlePosition: {
        type: String,
    },
});
</script>

<template>
    <div class="masked">
        <component :is="titleType" :class="['section-title', titleSize, titlePosition]">{{
            title
        }}</component>
    </div>
</template>
