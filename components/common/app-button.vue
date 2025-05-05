<script setup>
import { ref } from "vue";
import modalOverlay from "./components/modal/modal-overlay.vue";
import appForm from "../form/app-form.vue";
defineProps({
    btn: {
        type: Object,
        required: true,
    },
});
const opneModal = ref(false);
const loadForm = (form_id) => {
    alert(`form_id: ${form_id}`);
};
</script>

<template>
    <div
        v-if="btn.type_link === 'form'"
        class="btn"
        @click="opneModal = true"
        :class="[btn.size, btn.type, 'icon-' + btn.icon]"
    >
        {{ btn.text }}
    </div>
    <NuxtLink
        v-else
        :to="btn.link"
        class="btn"
        :class="[btn.size, btn.type, 'icon-' + btn.icon]"
        >{{ btn.text }}</NuxtLink
    >
    <Transition name="fade">
        <Teleport v-if="opneModal" to="#app-root">
            <modalOverlay @close="opneModal = false">
                <appForm :content="btn.form_data" :form_id="btn.form_id" :theme="'bg-light'" />
            </modalOverlay>
        </Teleport>
    </Transition>
</template>

<style lang="scss" scoped></style>
