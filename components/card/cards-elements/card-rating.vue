<template>
    <ul class="cards-rating">
        <li v-for="star in 5" :key="'star'+star" class="star" :class="star <= rating ? 'active' : ''">★</li>
    </ul>
</template>

<script setup>
defineProps(['rating'])
</script>

<style lang="scss" scoped></style>