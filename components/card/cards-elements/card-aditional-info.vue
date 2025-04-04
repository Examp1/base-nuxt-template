<script setup>
import AppButton from "~/components/common/app-button.vue";
defineProps({
    btns: {
        type: Object,
        default: () => ({}),
    },
    info: {
        type: Object,
        default: () => ({}),
    },
});
</script>
<template>
    <div v-if="btns.length" class="card-additionl-btns">
        <AppButton
            v-for="(btn, index) in btns"
            :key="'btn' + index"
            :btn="btn.card_btn"
        ></AppButton>
    </div>
</template>

<style lang="scss" scoped></style>
