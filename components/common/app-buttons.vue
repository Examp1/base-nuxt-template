<template>
    <div class="btns-container fadeDown-t">
        <AppButton v-for="(btn, index) in btns " :key="'btn'+index" :btn="btn"></AppButton>
    </div>
</template>

<script setup>
import AppButton from './app-button.vue';

defineProps({
    btns: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped></style>