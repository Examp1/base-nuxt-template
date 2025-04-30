<script setup>
import { computed } from "vue";
import * as zod from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { useField } from "vee-validate";

const props = defineProps({
    field: {
        type: Object,
        required: true,
    },
});

const fiedlValidationRules = computed(() => {
    let validator = zod.string();
    if (props.field.rules.required) {
        validator = validator.min(
            1,
            props.field.messages.required || "Required field",
        );
    }
    if (props.field.rules.email) {
        validator = validator.email(
            props.field.messages.email || "Invalida email",
        );
    }
    if (props.field.rules.min > 1) {
        validator = validator.min(
            props.field.rules.min,
            props.field.messages.min || `min value ${props.field.rules.min}`,
        );
    }
    if (props.field.rules.max > props.field.rules.min) {
        validator = validator.max(
            props.field.rules.max,
            props.field.messages.max || `max value ${props.field.rules.max}`,
        );
    }
    return validator;
});

const fieldRules = computed(() => toTypedSchema(fiedlValidationRules.value));

const { value, errorMessage } = useField(props.field.name, fieldRules);
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
