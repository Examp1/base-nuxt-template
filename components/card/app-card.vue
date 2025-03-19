<script setup>
import { computed } from "vue";
import { NuxtLink } from "#components";
import CardImage from "./cards-elements/card-image.vue";
import CardRating from "./cards-elements/card-rating.vue";
import CardIcon from "./cards-elements/card-icon.vue";
import CardPictogram from "./cards-elements/card-pictogram.vue";
import CardNumber from "./cards-elements/card-number.vue";
import CardTitle from "./cards-elements/card-title.vue";
import CardColorText from "./cards-elements/card-color-text.vue";
import CardText from "./cards-elements/card-text.vue";
import CardAdditionalInfo from "./cards-elements/card-aditional-info.vue";

const props = defineProps({
    card: {
        type: Object,
        required: true,
    },
    content: {
        type: Object,
        default: () => ({}),
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
    <div :class="cardClasses" :style="styleAttr">
        <div v-if="card.backgroundImage" class="overlay"></div>

        <component
            :is="card.link ? NuxtLink : 'div'"
            :to="card.link"
            v-if="card.cardType !== 'bg-card' && !card.hideHeader"
            class="card-header"
        >
            <CardImage
                v-if="card.image"
                :image="card.image"
                :alt="card.imageAlt"
            />
            <CardRating v-if="card.postRating" :rating="card.postRating" />
            <CardIcon v-if="card.icon" :icon="card.icon" />
            <CardPictogram v-if="card.pictogram" :pictogram="card.pictogram" />
            <CardNumber
                v-if="card.number"
                :number="number"
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
                <CardTitle
                    v-if="card.title"
                    :title="card.title"
                    :titleSize="card.titleSize"
                    :titleColorClass="card.titleColorClass"
                />
                <CardColorText
                    v-if="card.colorText"
                    :colorText="card.colorText"
                    :colorTextSize="card.colorTextSize"
                />
                <CardText
                    v-if="hasText"
                    :text="card.text"
                    :textSize="card.textSize"
                    :textColorClass="card.textColorClass"
                />
            </component>
            <CardAdditionalInfo
                v-if="card.additionalInfo"
                :info="card.additionalInfo"
            />

        </div>
    </div>
</template>

<style
    scoped
    src="../../assets/scss/system/components/cards/card-component.scss"
></style>
