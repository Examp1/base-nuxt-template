<!-- <script setup></script>

<template>
    <div>
        <div class="lang-switcher">
            <div class="selected-lang nav-link sm">UA</div>
           
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style> -->

<script setup>
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
    <div
        v-for="locale in locales"
        :key="locale.code"
        @click.prevent="setLocale(locale.code)"
    >
        {{ locale.code }}
    </div>
</template>

<style>
.icon {
    width: 50px;
    height: 50px;
    margin: 0.5em;
}
</style>
