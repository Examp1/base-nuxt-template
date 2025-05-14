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
        class="container"
        :class="[content.text_position]"
    >
        <appSectionTitle
            v-if="content.title"
            :title="content.title"
        ></appSectionTitle>
        <div
            class="redactor fade text-light-2"
            v-if="content.seotext"
            v-html="content.seotext"
        ></div>
        <appButtons v-if="content.btns" :btns="content.btns"></appButtons>
    </div>
</template>

<style lang="scss" scoped></style>
