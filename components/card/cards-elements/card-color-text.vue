<script setup>
const props = defineProps({
    colorText: String,
    colorTextSize: {
        type: String,
        default: 'sm'
    }
});
</script>
<template>
    <div class="card-color-text block-text" :class="colorTextSize">
        {{ colorText }}
    </div>
</template>