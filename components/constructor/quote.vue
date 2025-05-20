<script setup>
import appButton from "../common/app-button.vue";
import useUtils from "@/composables/useUtils.js";
const { getMediaPath } = useUtils();
const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="container">
        <div class="card wrap-padding-md gap-md img-size-sm img-rounding-md">
            <div class="card-body body-direction-horizontal">
                <div class="card-pictogram">
                    <img
                        :src="getMediaPath(content.image)"
                        alt="Default image description"
                    />
                </div>
                <div class="card-info">
                    <div class="block-title" :class="content.titleSize || 'md'">
                        {{ content.title }}
                    </div>
                    <div class="card-color-text block-title sm">
                        {{ content.colorText }}
                    </div>
                </div>
                <div
                    class="card-text block-text md italic"
                    v-html="content.text"
                ></div>
                <div class="card-additional-btns">
                    <appButton v-if="content.btns[0]" :btn="content.btns[0]" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-pictogram {
    width: var(--profile-sm, 48px);
}
.italic {
    grid-column: 1 / -1;
}
.card .body-direction-horizontal {
    grid-template-columns: auto 1fr;
    text-align: left;
}
.card-additional-btns {
    grid-column: 1 / -1;
    justify-content: flex-end;
    flex-wrap: wrap;
    display: flex;
    gap: var(--actions-inner-gap-md);
    /* margin-top: 48px; */
}
</style>
