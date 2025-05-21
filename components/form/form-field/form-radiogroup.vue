<script setup>
import { ref, watch } from "vue";
import { createFiedlValidationRules } from "~/composables/createFieldValidationSheme";
import { useField } from "vee-validate";
import { useClickOutside } from "@/composables/useClickOutside";

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

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const wrapperRef = ref(null);

const fieldRules = createFiedlValidationRules(props.field);
const { value, errorMessage } = useField(field__name, fieldRules, {
    initialValue: "",
});

useClickOutside(wrapperRef, () => {
    isOpen.value = false;
});

watch(value, () => {
    isOpen.value = false;
});
</script>

<template>
    <div
        class="form-field underline"
        :class="{ required: rules.required }"
        ref="wrapperRef"
    >
        <span class="field-title with-padding">{{ field__title }}</span>
        <div class="block-text md">{{ field__placeholder }}</div>
        <input
            type="hidden"
            :name="field__name"
            v-model="value"
            :id="`${field__name}_selected`"
        />
        <div class="radio-group">
            <div
                v-for="(opt, idx) in field.options"
                :key="opt + '-' + idx"
                class="btn sm"
                :class="{ active: value === opt }"
                @click="value = opt"
            >
                {{ opt }}
            </div>
        </div>
        <span class="error">{{ errorMessage }}</span>
    </div>
</template>

<style lang="scss" scoped>
.radio-group {
    margin-top: 5px;
}
.btn {
    border-radius: var(--button-input-radius-sm);
    border: var(--button-input-border) solid
        var(--button-input-border-default);
    background: var(--button-input-bg-default);
}
.btn:hover, .active {
    background: var(--button-input-bg-selected);
    color: #fff;
}
</style>
