<template>
    <NuxtLink :to="to">
        <slot></slot>
    </NuxtLink>
</template>

<script setup>
defineProps(['to'])
</script>

<style lang="scss" scoped></style>