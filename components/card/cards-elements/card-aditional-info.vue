<script setup>
import AppButton from "~/components/common/app-button.vue";
defineProps({
    btns: {
        type: [Object, Array],
        default: () => ({}),
    },
    btn: {
        type: Object,
        default: null,
    },
    info: {
        type: Object,
        default: () => ({}),
    },
});
</script>
<template>
    <div v-if="btns?.length" class="card-additional-btns">
        <AppButton
            v-for="(btn, index) in btns"
            :key="'btn' + index"
            :btn="btn.card_btn || btn"
        ></AppButton>
    </div>
    <div v-if="!!btn" class="card-additional-btn">
        <AppButton :btn="btn"></AppButton>
    </div>
</template>

<style lang="scss" scoped>
.card-additional-btns {
    justify-content: flex-end;
    display: flex;
    gap: var(--actions-inner-gap-md);
    margin-top: 48px;
}
</style>
