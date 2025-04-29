<script setup>
import appSectionTitle from "~/components/common/app-section-title.vue";
defineProps({
    content: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="container">
        <appSectionTitle
            :title-position="'tac'"
            v-if="content?.title"
            :title="content.title"
        ></appSectionTitle>
        <div class="row col-in-row-2">
            <div class="redactor" v-html="content.text_1"></div>
            <div class="redactor" v-html="content.text_2"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
