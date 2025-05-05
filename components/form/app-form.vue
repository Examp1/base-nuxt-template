<script setup>
import { ref } from "vue";
import { BASE_URL } from "@/constants";
import { useForm } from "vee-validate";

const isSuccess = ref(false);
let successData = ref(null);
const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
    theme: {
        type: String,
    },
    form_id: {
        type: [Number, String],
    },
});

const components = [
    "form-input",
    "form-title",
    "form-text",
    "form-select",
    "form-editor",
    "form-checkbox",
];

const componentMap = components.reduce((map, name) => {
    map[name] = defineAsyncComponent(
        () => import(`~/components/form/form-field/${name}.vue`),
    );
    return map;
}, {});

const { validateField, handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
    const data = $fetch(`${BASE_URL}/api/request/send`, {
        method: "POST",
        body: {
            form_id: props.form_id,
            ...values,
        },
    });
    successData.value = data;
    isSuccess.value = true;
});
</script>

<template>
    <form
        v-if="!isSuccess"
        class="form-wrapper"
        :class="theme"
        @submit="onSubmit"
    >
        <!-- <div class="form-header"></div> -->
        <div class="form-body">
            <component
                v-for="field in content?.list"
                :key="`${field.type}-${field.label}`"
                :is="componentMap[field.type]"
                :field="field"
            />
            <div class="btns-container">
                <button type="submit" class="btn primary fill md">
                    {{ content?.btn_name || "submit" }}
                </button>
            </div>
        </div>
    </form>
    <div v-else class="success">
        <div class="success-header">
            <h3>{{ successData.success_title || "success title" }}</h3>
        </div>
        <div class="success-body">
            <p>{{ successData.success_text || "success text" }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
