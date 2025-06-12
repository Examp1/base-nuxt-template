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
        class="simple-title"
    >
        <appSectionTitle
            v-if="content.title"
            :title="content.title"
            :titleType="content.tag_variant"
            :titleSize="content.redactor_size"
        ></appSectionTitle>
        <appButtons v-if="content.btns" :btns="content.btns"></appButtons>
    </div>
</template>

<style lang="scss" scoped>
:deep(.simple-title){
    .section-title{
        padding-bottom: 0px !important;
    }
}
</style>
