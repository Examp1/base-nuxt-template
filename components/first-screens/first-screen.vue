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
        <h1 v-html="content.title" class="page-title lg"></h1>
        <AppButtons v-if="content?.btns" :btns="content.btns"></AppButtons>
    </div>
</template>

<style lang="scss" scoped>
.first-screen {
    aspect-ratio: 2.13;
    .page-title:deep {
        font-style: italic;
        span {
            font-family: Zapfino;
            line-height: 0;
        }
    }
}
</style>
