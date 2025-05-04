<script setup>
// import appOverlay from "./components/common/app-overlay.vue";
// import appForm from "../form/app-form.vue";
defineProps({
    btn: {
        type: Object,
        required: true,
    },
});

const loadForm = (form_id) => {
    alert(`form_id: ${form_id}`);
};
</script>

<template>
    <div
        v-if="btn.type_link === 'form'"
        class="btn"
        @click="loadForm(btn.form_id)"
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
    <!-- <Teleport to="body">
        <appOverlay v-if="'list' in btn.form_data">
            <appForm :content="btn.form_data" />
        </appOverlay>
    </Teleport> -->
</template>

<style lang="scss" scoped></style>
