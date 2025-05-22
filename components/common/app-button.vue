<script setup>
import { ref } from "vue";
import modalForm from "../modal/modal-form.vue";
defineProps({
    btn: {
        type: Object,
        required: true,
    },
});
const openModal = ref(false);
</script>

<template>
    <div
        v-if="btn.type_link === 'form'"
        class="btn"
        @click="openModal = true"
        :class="[btn.size, btn.type, 'icon-' + btn.icon]"
    >
        {{ btn.text || btn.name }}
    </div>
    <NuxtLink
        v-else
        :to="btn.link"
        class="btn"
        :class="[btn.size, btn.type, 'icon-' + btn.icon]"
        >{{ btn.text || btn.name }}</NuxtLink
    >
    <Transition name="fade">
        <Teleport v-if="openModal" to="#app-root">
            <modalForm
                @close="openModal = false"
                :form="{ form_data: btn.form_data, form_id: btn.form_id }"
            />
        </Teleport>
    </Transition>
</template>

<style lang="scss" scoped></style>
