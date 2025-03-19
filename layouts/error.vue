<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <button @click="handleError">Попробовать снова</button>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});

const handleError = () => clearError({ redirect: "/" });
</script>