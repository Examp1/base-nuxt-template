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

const fieldRules = createFiedlValidationRules(props.field, "bool");
const { value, errorMessage } = useField(field__name, fieldRules, {
    initialValue: false,
});
// const setValue = () => {
//     if (value) {
//         value = false;
//     } else {
//         value = true;
//     }
// };
</script>

<template>
    <div class="form-field" :class="{ required: rules.required }">
        <label class="checkbox">
            <input type="checkbox" v-model="value" :name="field__name" />
            <p>
                <span>{{ field__placeholder }}</span>
            </p>
        </label>
        <span class="error">{{ errorMessage }}</span>
    </div>
</template>

<style lang="scss" scoped></style>
