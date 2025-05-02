<script setup>
import { useForm } from "vee-validate";

// defineProps({
//     content: {
//         type: Object,
//         required: true,
//     },
// });

const components = ["form-input", "form-title", "form-text", "form-select", "form-editor", "form-checkbox"];

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

const content = [
    {
        label: "Текст",
        visibility: "1",
        type: "form-text",
        value: "<p>Contact details</p>",
    },
    {
        label: "Input",
        visibility: "1",
        type: "form-input",
        name: "name",
        title: null,
        placeholder: "Name*",
        show_in_message: "1",
        shown_name: null,
        rules: {
            required: true,
            email: false,
            min: 2,
            max: 12,
        },
        messages: {
            required: "req field",
            email: null,
            min: null,
            max: "max 12",
        },
    },
    {
        label: "Input",
        visibility: "1",
        type: "form-input",
        name: "phone",
        title: null,
        placeholder: "Phone number *",
        show_in_message: "1",
        shown_name: null,
        rules: {
            required: true,
            email: false,
            min: null,
            max: null,
        },
        messages: {
            required: "req",
            email: null,
            min: null,
            max: null,
        },
    },
    {
        label: "Input",
        visibility: "1",
        type: "form-input",
        name: "email",
        title: null,
        placeholder: "Email *",
        show_in_message: "1",
        shown_name: null,
        rules: {
            required: true,
            email: true,
            min: null,
            max: null,
        },
        messages: {
            required: "req",
            email: "email invalid",
            min: null,
            max: null,
        },
    },
    {
        label: "checkbox",
        visibility: "1",
        type: "form-checkbox",
        name: "agree",
        title: "agreeagreeagreeagree",
        placeholder: "agreeagree *",
        show_in_message: "1",
        shown_name: null,
        rules: {
            required: true,
            email: false,
            min: null,
            max: null,
        },
        messages: {
            required: "req",
            email: "email invalid",
            min: null,
            max: null,
        },
    },
    {
        label: "Текст",
        visibility: "1",
        type: "form-text",
        value: '<p><span style="color: rgb(31, 31, 31); font-family: monospace; font-size: 12px; white-space-collapse: preserve;">Data for registration of the tour</span></p>',
    },
    {
        label: "Время",
        visibility: "1",
        type: "form-time-picker",
        name: "time",
        title: "time text",
        placeholder: "time",
        show_in_message: "1",
        shown_name: null,
        rules: {
            required: true,
            email: false,
            min: null,
            max: null,
        },
        messages: {
            required: null,
            email: null,
            min: null,
            max: null,
        },
    },
    {
        label: "Дата",
        visibility: "1",
        type: "form-data-picker",
        name: "date",
        title: "date text",
        placeholder: "tour start date",
        show_in_message: "1",
        shown_name: null,
        rules: {
            required: true,
            email: false,
            min: null,
            max: null,
        },
        messages: {
            required: "req",
            email: null,
            min: null,
            max: null,
        },
    },
    {
        label: "Select",
        visibility: "1",
        type: "form-select",
        name: "person",
        title: "Select one of the options",
        options: {
            "5-7_days": " 5-7 days",
            "10_days": " 10 days",
            "12_days": " 12 days",
        },
        show_in_message: "1",
        shown_name: "Duration",
        rules: {
            required: true,
            email: false,
            min: null,
            max: null,
        },
        messages: {
            required: null,
            email: null,
            min: null,
            max: null,
        },
    },
    {
        label: "Текст",
        visibility: "1",
        type: "form-text",
        value: '<p><span style="color: rgb(31, 31, 31); font-family: monospace; font-size: 12px; white-space-collapse: preserve;">Additional wishes</span></p>',
    },
    {
        label: "Textarea",
        visibility: "1",
        type: "form-editor",
        name: "commnet",
        title: null,
        placeholder: "commen",
        show_in_message: "1",
        shown_name: null,
        rules: {
            required: false,
            email: false,
            min: null,
            max: null,
        },
        messages: {
            required: null,
            email: null,
            min: null,
            max: null,
        },
    },
];
</script>

<template>
    <form class="form-wrapper" @submit="onSubmit">
        <!-- <div class="form-header"></div> -->
        <div class="form-body">
            <component
                v-for="field in content"
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
