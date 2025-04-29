<script setup lang="ts">
// / import type { ICard } from "~/interfaces/i-card.ts";
import { computed } from "vue";
import { NuxtLink } from "#components";
import cardImage from "./cards-elements/card-image.vue";
import cardRating from "./cards-elements/card-rating.vue";
import cardIcon from "./cards-elements/card-icon.vue";
import cardPictogram from "./cards-elements/card-pictogram.vue";
import cardNumber from "./cards-elements/card-number.vue";
import cardTitle from "./cards-elements/card-title.vue";
import cardColorText from "./cards-elements/card-color-text.vue";
import cardText from "./cards-elements/card-text.vue";
import cardAdditionalInfo from "./cards-elements/card-aditional-info.vue";
import cardVideo from "./cards-elements/card-video.vue";
import useUtils from "@/composables/useUtils.js";
const { getMediaPath } = useUtils();

// defineProps<{id: number}>()

const props = defineProps({
    card: {
        type: Object,
        required: true,
    },
    content: {
        type: Object,
        default: () => ({}),
    },
    loading: {
        type: Boolean,
        default: false,
    },
});

const isBottom = computed(() => {
    return (
        props.card.imageReverse ||
        (props.content.image_position === "bottom" &&
            props.content.type === "image")
    );
});

const styleAttr = computed(() => {
    if (props.card.cardType === "bg-card") {
        if (props.card.fon_color && props.card.fon_type === "color") {
            return `background-color: ${props.card.fon_color};`;
        } else if (props.card.fon_type === "gradient" && !image.value) {
            return "background: gradient bg-light;";
        } else {
            return `background-image: url('${image.value}'); background-color: bg-dark;`;
        }
    }
    if (props.card.backgroundImage) {
        return `background: url('${props.card.backgroundImage}') no-repeat center/cover;`;
    }
    return null;
});

const cardClasses = computed(() => {
    return [
        "card",
        { reverse: isBottom.value },
        { "no-bg": props.card.noBg },
        props.card.wrapPadding
            ? `wrap-padding-${props.card.wrapPadding}`
            : null,
        props.card.bodyPadding
            ? `body-padding-${props.card.bodyPadding}`
            : null,
        props.card.gap ? `gap-${props.card.gap}` : null,
        props.card.cardType || "vertical",
        props.card.imgSize ? `img-size-${props.card.imgSize}` : "img-size-md",
        { adaptive: props.card.adaptive },
        props.card.contentPosition
            ? `content-position-${props.card.contentPosition}`
            : null,
        props.card.customClass,
        props.card.background,
        props.card.imgRounding
            ? `img-rounding-${props.card.imgRounding}`
            : null,
    ].filter(Boolean);
});

const hasText = computed(() => {
    const text = String(props.card.text);
    const description = String(props.card.description);
    return (
        (text && text !== "<p><br></p>") ||
        (description && description !== "<p><br></p>")
    );
});
</script>
<template>
    <div v-if="loading" class="card loading">loading card</div>
    <div v-else :class="cardClasses" :style="styleAttr">
        <div v-if="card.backgroundImage" class="overlay"></div>
        <div v-if="card.top" class="top-label block-text sm">
            {{ $t("top-label") }}
        </div>
        <component
            :is="card.link ? NuxtLink : 'div'"
            :to="card.link"
            v-if="card.cardType !== 'bg-card' && !card.hideHeader"
            class="card-header"
        >
            <cardImage
                v-if="card.image"
                :image="card.customImage ? card.image : getMediaPath(card.image)"
                :alt="card.imageAlt"
            />
            <cardVideo
                v-if="card.video"
                :video="card.video"
            />
            <cardRating v-if="card.postRating" :rating="card.postRating" />
            <cardIcon v-if="card.icon" :icon="card.icon" />
            <cardPictogram v-if="card.pictogram" :pictogram="card.pictogram" />
            <cardNumber
                v-if="card.number"
                :number="card.number"
                :numberSize="card.numberSize"
            />
        </component>

        <div
            class="card-body"
            :class="{
                [`body-direction-${card.bodyDirection}`]: card.bodyDirection,
                [`body-gap-${card.bodyGap}`]: card.bodyGap,
            }"
        >
            <component
                :is="card.link ? NuxtLink : 'div'"
                :to="card.link"
                class="card-info"
            >
                <cardTitle
                    v-if="card.title"
                    :title="card.title"
                    :titleSize="card.titleSize"
                    :titleColorClass="card.titleColorClass"
                />
                <cardColorText
                    v-if="card.colorText"
                    :colorText="card.colorText"
                    :colorTextSize="card.colorTextSize"
                />
                <cardText
                    v-if="hasText"
                    :text="card.text"
                    :textSize="card.textSize"
                    :textColorClass="card.textColorClass"
                />
            </component>
            <cardAdditionalInfo
                :info="card.additionalInfo"
                :btns="card.card_btns || card.btns"
                :btn="card.card_btn"
            />
        </div>
        <!-- <div v-if="card.card_btns" class="card-footer">
            <AppButton
                v-for="(btn, index) in card.card_btns"
                :key="'btn' + index"
                :btn="btn.card_btn"
            ></AppButton>
        </div> -->
    </div>
</template>

<style
    scoped
    lang="scss"
    src="../../assets/scss/system/components/cards/card-component.scss"
></style>
<style lang="scss" scoped>
.loading {
    background-color: #f4f4f4;
    width: 200px;
    height: 200px;
}
.top-label {
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px 12px;
    border-radius: 0px 0px 0px 14px;
    background: #e54649;
    color: #fff;
}
</style>
