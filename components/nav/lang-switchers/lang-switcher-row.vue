<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const lolizedValue = {
    uk: "Укр",
    en: "Eng",
};
</script>

<template>
    <div class="lang-switcher">
        <NuxtLink
            v-for="lang in locales"
            :key="lang.code"
            :to="switchLocalePath(lang.code)"
            class="btn tint sm"
            :class="{ stroke: locale === lang.code }"
        >
            {{ lolizedValue[lang.code] }}
        </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
.lang-switcher {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    gap: 4px;
}
</style>
