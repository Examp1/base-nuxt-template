<script setup>
defineProps({
    titleType: {
        type: String,
        default: 'h2'
    },
    class: {
        type: String,
        default: 'section-title'
    },
    titleSize: {
        type: String,
        default: 'lg'
    },
    title: {
        type: String,
        required: true,
    }
}
)
</script>

<template>
    <div class="masked">
        <component :is="titleType" :class="['section-title', titleSize]">{{ title }}</component>
    </div>
</template>