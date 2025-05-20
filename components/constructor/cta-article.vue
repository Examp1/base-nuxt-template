<script setup>
import appButton from "../common/app-button.vue";
const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="container">
        <div
            class="card wrap-padding-lg vertical gap-md img-size-sm img-rounding-md"
        >
            <div class="card-body body-direction-horizontal">
                <div class="card-info">
                    <div class="block-title" :class="content.titleSize || 'md'">
                        {{ content.title }}
                    </div>
                    <div
                        class="card-text block-text md"
                        v-html="content.text"
                    ></div>
                </div>
                <div class="card-additional-btns">
                    <div class="card-color-text block-title xxl">
                        {{ content.colorText }}
                    </div>
                    <appButton v-if="content.btns[0]" :btn="content.btns[0]" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-body.body-direction-horizontal {
    grid-template-columns: repeat(2, 0.5fr);
    justify-content: space-between;
    .card-additional-btns {
        justify-self: end;
        text-align: right;
    }
}
</style>
