<script setup>
import appButtons from "../common/app-buttons.vue";
import appSectionTitle from "../common/app-section-title.vue";

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
        <appSectionTitle
            v-if="content.title"
            :title="content.title"
        ></appSectionTitle>
        <div
            class="redactor fade"
            v-if="content.text"
            v-html="content.text"
        ></div>
        <appButtons v-if="content.btns" :btns="content.btns"></appButtons>
    </div>
</template>

<style lang="scss" scoped>
</style>
