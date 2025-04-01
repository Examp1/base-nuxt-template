<script setup>
import AppButtons from "../common/app-buttons.vue";
import AppSectionTitle from "../common/app-section-title.vue";

defineProps({
    content: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div
        :class="[`container-${content.container_size}`, content.text_position]"
    >
        <AppSectionTitle
            v-if="content.title"
            :title="content.title"
        ></AppSectionTitle>
        <div
            class="redactor fade"
            v-if="content.text"
            v-html="content.text"
        ></div>
        <AppButtons v-if="content.btns" :btns="content.btns"></AppButtons>
    </div>
</template>

<style lang="scss" scoped>
</style>
