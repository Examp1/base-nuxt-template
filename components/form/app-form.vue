<script setup>
import { useForm } from "vee-validate";

defineProps({
    content: {
        type: Object,
        required: true,
    },
});

const components = ["form-input", "form-title", "form-text"];

const componentMap = components.reduce((map, name) => {
    map[name] = defineAsyncComponent(
        () => import(`~/components/form/form-field/${name}.vue`),
    );
    return map;
}, {});

const { validateField, handleSubmit } = useForm();

const onSubmit = handleSubmit((values) => {
    console.log(values);
});

const content = {
    form_id: "2",
    form_data: [
        {
            label: "Заголовок",
            visibility: "1",
            type: "form-title",
            value: null,
        },
        {
            label: "Input",
            visibility: "1",
            type: "form-input",
            name: "test",
            title: "test",
            placeholder: "test",
            show_in_message: "1",
            shown_name: null,
            rules: {
                required: true,
                email: false,
                min: null,
                max: 12,
            },
            messages: {
                required: null,
                email: null,
                min: null,
                max: null,
            },
        },
        {
            label: "email",
            visibility: "1",
            type: "form-input",
            name: "email",
            title: "email",
            placeholder: "email",
            show_in_message: "1",
            shown_name: null,
            rules: {
                required: true,
                email: true,
                min: 1,
                max: 2,
            },
            messages: {
                required: null,
                email: null,
                min: null,
                max: null,
            },
        },
        {
            label: "Время",
            visibility: "1",
            type: "form-time-picker",
            name: "test2",
            title: "test2",
            placeholder: "test2",
            show_in_message: "1",
            shown_name: null,
            rules: {
                required: true,
                email: true,
                min: 1,
                max: 2,
            },
            messages: {
                required: null,
                email: null,
                min: null,
                max: null,
            },
        },
    ],
    form_btn_name: null,
    form_image: null,
};

</script>

<template>
    <form class="form-wrapper" @submit="onSubmit">
        <!-- <div class="form-header"></div> -->
        <div class="form-body">
            <component
                v-for="field in content.form_data"
                :key="`${field.type}-${field.label}`"
                :is="componentMap[field.type]"
                :field="field"
            />
        </div>
        <div class="btns-container">
            <button type="submit" class="btn primary fill md">submit</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
