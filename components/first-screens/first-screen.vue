<script setup>
import AppButtons from "~/components/common/app-buttons.vue";
defineProps({
    content: {
        type: Object,
        required: true,
    },
});
</script>
<template>
    <div class="first-screen container">
        <h1 v-html="content.title" class="page-title lg zapfino-font"></h1>
        <AppButtons v-if="content?.btns" :btns="content.btns"></AppButtons>
    </div>
</template>

<style lang="scss" scoped>
.first-screen {
    @media (min-width: 1366px) {
        aspect-ratio: 2.13;
    }
}
</style>
