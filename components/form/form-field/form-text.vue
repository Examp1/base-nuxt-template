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
        <div class="block-text md" v-html="field__value"></div>
    </div>
</template>
