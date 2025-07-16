<script setup>
import { useField } from "vee-validate";
import { createFiedlValidationRules } from "~/composables/createFieldValidationSheme";
const props = defineProps({
    field: {
        type: Object,
        required: true,
    },
});

const {
    form_data: { field__name, field__title, field__placeholder },
    rules,
} = props.field;

const fieldRules = createFiedlValidationRules(props.field);
const { value, errorMessage } = useField(field__name, fieldRules, {
    initialValue: "",
});
</script>

<template>
    <!-- <?= $item['field_style'] ?: 'outlined' ?></div> -->
    <div class="form-field sm" :class="{ required: rules.required }">
        <span class="field-title">{{ field__title }}</span>
        <input
            type="text"
            v-model="value"
            :placeholder="field__placeholder"
            :name="field__name"
        />
        <span class="error">{{ errorMessage }}</span>
    </div>
</template>

<style lang="scss" scoped></style>
