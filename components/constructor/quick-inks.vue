<script setup>
import appSectionTitle from "~/components/common/app-section-title.vue";
import appButton from "~/components/common/app-button.vue";
const props = defineProps({
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
        <div class="quick-links">
            <appButton
                v-for="(link, idx) in content.link"
                :key="'link' + idx"
                :btn="link.link"
            ></appButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
:deep(.quick-links){
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    .btn{
        border-radius: 100px;
    }
}
</style>
