<script setup>
import { useForm } from "vee-validate";

defineProps({
    content: {
        type: Object,
        required: true,
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
    console.log(values);
});

// const content = {
//     btn_name: "btn",
//     list: [
//         {
//             type: "form-title",
//             form_data: { field__value: "Тестова форма" },
//             rules: { min: null, max: null, email: null, required: null },
//             messages: [],
//         },
//         {
//             type: "form-text",
//             form_data: { field__value: "<p>Опис тестова форма</p>" },
//             rules: { min: null, max: null, email: null, required: null },
//             messages: [],
//         },
//         {
//             type: "form-input",
//             form_data: {
//                 field__name: "name",
//                 field__title: "Заголово",
//                 field__required: "0",
//                 field__shown_name: "",
//                 field__placeholder: "Підказка",
//                 field__default_value: "",
//                 field__show_in_message: "0",
//             },
//             rules: { min: null, max: null, email: null, required: true },
//             messages: { required: "test" },
//         },
//         {
//             type: "form-editor",
//             form_data: {
//                 field__name: "textarea",
//                 field__title: "textarea",
//                 field__required: "1",
//                 field__shown_name: "",
//                 field__placeholder: "textarea",
//                 field__default_value: "",
//                 field__show_in_message: "0",
//             },
//             rules: { min: null, max: null, email: null, required: null },
//             messages: [],
//         },
//         {
//             type: "form-select",
//             form_data: {
//                 field__name: "select",
//                 field__title: "select",
//                 field__required: "0",
//                 field__shown_name: "",
//                 field__placeholder: "select",
//                 field__default_value: "",
//                 field__select__options:
//                     "item1: item1\nitem2: item2\nitem3: item3",
//                 field__show_in_message: "0",
//                 field__select__options_preset: "options",
//             },
//             options: [
//                 { id: "item1", text: " item1" },
//                 { id: "item2", text: " item2" },
//                 { id: "item3", text: " item3" },
//             ],
//             rules: { min: null, max: null, email: null, required: true },
//             messages: [],
//         },
//         {
//             type: "form-checkbox",
//             form_data: {
//                 field__name: "checkmark",
//                 field__title: "checkmark",
//                 field__value: "",
//                 field__required: "1",
//                 field__shown_name: "",
//                 field__placeholder: "checkmark",
//                 field__default_value: "",
//                 field__show_in_message: "0",
//             },
//             rules: { min: null, max: null, email: null, required: null },
//             messages: [],
//         },
//     ],
// };
</script>

<template>
    <form class="form-wrapper" @submit="onSubmit">
        <!-- <div class="form-header"></div> -->
        <div class="form-body">
            <component
                v-for="field in content?.list"
                :key="`${field.type}-${field.label}`"
                :is="componentMap[field.type]"
                :field="field"
            />
        </div>
        <div class="btns-container">
            <button type="submit" class="btn primary fill md">
                {{ content?.btn_name || "submit" }}
            </button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
