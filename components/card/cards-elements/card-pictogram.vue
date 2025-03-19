<script setup>
const props = defineProps({
    pictogram: {
        type: String,
    },
    pictogramAlt: {
        type: String,
    },
});
</script>
<template>
    <img class="card-pictogram" :src="pictogram" :alt="pictogramAlt"></img>
</template>