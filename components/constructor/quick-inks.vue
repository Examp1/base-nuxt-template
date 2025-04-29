<script setup>
import { computed } from "vue";
import AppSectionTitle from "~/components/common/app-section-title.vue";
import AppButton from "~/components/common/app-button.vue";
const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});

// const prepearingBtns = computed(() => {
//     const temp = props
// })
</script>

<template>
    <div class="container">
        <AppSectionTitle
            :title-position="'tac'"
            v-if="content?.title"
            :title="content.title"
        ></AppSectionTitle>
        <div class="quick-links">
            <AppButton
                v-for="(link, idx) in content.link"
                :key="'link' + idx"
                :btn="link.link"
            ></AppButton>
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
