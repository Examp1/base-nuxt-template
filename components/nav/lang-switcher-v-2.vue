<script setup>
import AppSprite from "~/components/common/app-sprite.vue";
const { locale, locales, setLocale } = useI18n();

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
        <div class="btn tint sm">
            {{ lolizedValue[locale] }}
        </div>
        <div class="btn tint sm other-langs">
            <NuxtLink
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="locale.code"
                @click.prevent="setLocale(locale.code)"
                class="other-lang"
            >
                {{ lolizedValue[locale.code] }}
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
.lang-switcher {
    position: relative;
    z-index: 1;
    .other-lang {
        cursor: pointer;
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
        top: -100%;
        z-index: 101;
        background-color: #f4f4f4;
    }
}
</style>
