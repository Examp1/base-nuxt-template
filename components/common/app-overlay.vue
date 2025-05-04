<script setup>
import { ref } from "vue";
</script>

<template>
    <div class="overlay">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.overlay {
    position: fixed;
    z-index: 10000;
    background-color: rgba(#000, 0.7);
    inset: 0;
}
</style>
