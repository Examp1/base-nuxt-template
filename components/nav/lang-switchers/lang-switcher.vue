<script setup>
import { computed } from "vue";
import AppSprite from "~/components/common/app-sprite.vue";
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
});
const lolizedValue = {
    uk: "Укр",
    en: "Eng",
};
</script>

<template>
    <div class="lang-switcher">
        <div class="current-lang nav-link sm">
            <AppSprite :id="locale"></AppSprite>{{ lolizedValue[locale] }}
        </div>
        <div class="other-langs">
            <NuxtLink
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                class="other-lang"
            >
                <AppSprite :id="locale.code"></AppSprite
                >{{ lolizedValue[locale.code] }}
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
.lang-switcher {
    position: relative;
    .current-lang,
    .other-lang {
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        img {
            width: 16px;
            height: 16px;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    &:hover .other-langs {
        opacity: 1;
        visibility: visible;
    }
    .other-langs {
        transition: 0.3s;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        right: 0;
        z-index: 101;
        background-color: #fff;
        padding: 10px;
        border-radius: 10px;
    }
}
</style>
