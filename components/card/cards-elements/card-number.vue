        
<script setup>
defineProps({
    number: String,
    numberSize: {
        type: String,
        default: 'md'
    },
})
</script>
<template>
    <div class="card-number" :class="numberSize" :data-number="number">
        {{ number }}
    </div>
</template>

<style lang="scss" scoped></style>