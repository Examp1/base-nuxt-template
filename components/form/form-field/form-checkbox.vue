<script setup>
import { useField } from "vee-validate";
import { createFiedlValidationRules } from "~/composables/createFieldValidationSheme";
const props = defineProps({
    field: {
        type: Object,
        required: true,
    },
});

const fieldRules = createFiedlValidationRules(props.field, "bool");
const { value, errorMessage } = useField(props.field.name, fieldRules, {
    initialValue: false,
});
const setValue = () => {
    if (value) {
        value = false;
    } else {
        value = true;
    }
};
</script>

<template>
    <div class="form-field" :class="{ required: field.rules.required }">
        <label class="checkbox">
            <input type="checkbox" v-model="value" :name="field.name" />
            <p>
                <span>{{ field.label }}</span>
            </p>
        </label>
        <span class="error">{{ errorMessage }}</span>
    </div>
</template>

<style lang="scss" scoped></style>
