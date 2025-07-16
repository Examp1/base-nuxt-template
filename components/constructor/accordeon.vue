<script setup>
import appSectionTitle from "~/components/common/app-section-title.vue";
import { slideToggle } from "@/composables/useSlideAnimations.ts";

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
            v-if="content?.title"
            :title="content.title"
            :titlePosition="'center'"
            :titleSize="'sm'"
        ></appSectionTitle>
        <div
            v-for="(accordion_item, idx) in content.cards_list"
            :key="'accordion_item' + idx"
            class="accordion-block-row"
            :class="[
                !!accordion_item.text_editor || 'no-content',
                !!accordion_item.image ? 'hasImage' : 'noImage',
            ]"
        >
            <img v-if="accordion_item.image" :src="getPath(accordion_item.image)" alt="" />
            <div class="accordion-wrapper">
                <div
                    class="accorion-trigger"
                    @click="slideToggle($event.target)"
                >
                    <div
                        class="block-title"
                        :class="accordion_item.titleSize || 'xxxl'"
                    >
                        {{ accordion_item.title }}
                    </div>
                    <div class="tag-list">
                        <div
                            v-for="({ tag }, idx) in accordion_item.tag_list"
                            :key="'tag' + idx"
                            class="btn sm tag"
                        >
                            {{ tag }}
                        </div>
                    </div>
                </div>
                <div
                    hidden
                    class="accorion-content redactor"
                    v-html="accordion_item.text_editor"
                ></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.accordion-block-row {
    display: grid;
    align-items: start;
    border-bottom: 1px solid var(--border-light);
    padding: var(--accordeon-body-padding-y-md);
    &.hasImage {
        grid-template-columns: 0.25fr 0.75fr;
        gap: 120px;
    }
    @include bp-820 {
        grid-template-columns: 1fr !important;
        gap: 32px !important;
    }
    img {
        object-fit: contain;
        height: auto;
        border-radius: unset;
    }
    .accordion-wrapper {
        .accorion-trigger {
            display: grid;
            position: relative;
            cursor: pointer;
            padding-right: 34px;
            gap: 24px;
            &.active {
                padding-bottom: 24px;
                &::after {
                    transform: rotate(180deg);
                }
            }
        }
    }
    &:not(.no-content) {
        .accorion-trigger {
            &::after {
                content: "\e82b";
                font-family: "fontello";
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(-50%);
                transition: 0.3s;
                transform-origin: center;
            }
        }
    }
    .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        .tag {
            border-radius: 100px;
            color: var(--button-stroke-label-hover);
            border: var(--link-ext-border, 1px) solid
                var(--button-stroke-neutral-border-default, rgba(0, 0, 0, 0.16));
        }
    }
}
</style>
