<script setup>
import { useField } from "vee-validate";
import { createFiedlValidationRules } from "~/composables/createFieldValidationSheme";
const props = defineProps({
    field: {
        type: Object,
        required: true,
    },
});

const fieldRules = createFiedlValidationRules(props.field);
const { value, errorMessage } = useField(props.field.name, fieldRules);
</script>

<template>
    <div class="form-field" :class="{ required: field.rules.required }">
        <span class="field-title">{{ field.label }}</span>
        <textarea
            maxlength="1000"
            type="text"
            :placeholder="field.placeholder"
            :name="field.name"
        ></textarea>
        <span class="error">{{ errorMessage }}</span>
    </div>
</template>

<style lang="scss" scoped></style>
