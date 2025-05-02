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
const { value, errorMessage } = useField(props.field.name, fieldRules, {
    initialValue: "",
});
</script>
<template>
    <!-- <?= $item['field_style'] ?: 'outlined' ?></div> -->
    <div class="form-field" :class="{ required: field.rules.required }">
        <span class="field-title">{{ field.label }}</span>
        <input
            type="text"
            v-model="value"
            :placeholder="field.placeholder"
            :name="field.name"
        />
        <span class="error">{{ errorMessage }}</span>
    </div>
</template>

<style lang="scss" scoped></style>
