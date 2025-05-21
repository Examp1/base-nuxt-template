<script setup>
import { NuxtLink } from "#components";
defineProps({
    breadcrumbs: [Array, Object],
});
</script>

<template>
    <ul class="breadcrumbs">
        <li><nuxt-link to="/" class="icon-home-2"></nuxt-link></li>
        <li v-for="(item, idx) in breadcrumbs" :key="idx">
            <component
                :is="idx !== breadcrumbs.length - 1 ? NuxtLink : 'span'"
                :to="item.link"
                class="block-text md"
                >{{ item.title || item.name }}</component
            >
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.breadcrumbs {
    display: flex;
    align-items: center;
    margin-bottom: 29px;

    @media (max-width: 576px) {
        flex-wrap: wrap;
        // overflow-x: scroll;
    }

    li {
        position: relative;
        @media (max-width: 576px) {
            white-space: nowrap;
            /* margin-bottom: 10px; */
        }

        span {
            color: var(--text-light);
        }

        &:not(:last-of-type) {
            margin-right: 26px;

            &::after {
                font-family: "fontello";
                content: "\e823";
                position: absolute;
                font-size: 12px;
                top: 50%;
                transform: translateY(-50%);
                right: -16px;
                line-height: 140%;
            }
        }
    }
}
</style>
