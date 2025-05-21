<script setup>
const props = defineProps({
    field: {
        type: Object,
        required: true,
    },
});
const {
    form_data: { field__value },
} = props.field;
</script>

<template>
    <div class="form-field">
        <h2 class="section-title md">{{ field__value }}</h2>
    </div>
</template>

<style lang="scss" scoped></style>
