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
    <div class="card-color-text block-title" :class="colorTextSize">
        {{ colorText }}
    </div>
</template>

<style lang="scss" scoped>
.card-color-text{
    display: block !important;
}
</style>