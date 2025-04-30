<script setup>
defineProps({
    field: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="form-field">
        <h2 class="block-text md">{{ field.label }}</h2>
    </div>
</template>
