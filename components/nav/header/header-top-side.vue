<script setup>
import LangSwitcher from "../lang-switcher.vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

defineProps({
    contactsInfo: {
        type: Object,
        default: () => {},
    },
    navMenu: {
        type: Object,
        default: () => {},
    },
});
</script>
<template>
    <div class="header-top-side bg-dark">
        <div class="container jcsb">
            <div class="col-l aic">
                <a
                    v-if="contactsInfo.phone?.[0]"
                    :href="`tel:${contactsInfo.phone[0].number}`"
                    class="nav-link sm text-light"
                    >{{ contactsInfo.phone[0].title }}</a
                >
                <div
                    class="block-text sm-m text-light dn-768"
                    v-if="contactsInfo.address && width >= 768"
                >
                    {{ contactsInfo.address }}
                </div>
                <div
                    class="block-text sm-m text-light dn-768"
                    v-if="contactsInfo.schedule?.[0].title && width >= 768"
                >
                    {{ contactsInfo.schedule[0].title }}
                    {{ contactsInfo.schedule[0].time }}
                </div>
                <nav class="menu dn-768" v-if="navMenu && width >= 768">
                    <nuxt-link
                        :to="link.url"
                        v-for="(link, idx) in navMenu"
                        :key="'navMenuLink' + idx"
                        class="nav-link md text-light"
                        >{{ link.name }}</nuxt-link
                    >
                </nav>
                <nav class="socials" v-if="contactsInfo.socials">
                    <nuxt-link
                        :to="link.link"
                        v-for="(link, idx) in contactsInfo.socials"
                        :key="'navMenuLink' + idx"
                        class="nav-link md text-light"
                        >{{ link.type }}</nuxt-link
                    >
                </nav>
            </div>
            <div class="col-r">
                <LangSwitcher></LangSwitcher>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-top-side {
    background: var(--header-top-bg);
    display: flex;
    justify-content: space-between;
    height: var(--header-top-haight);
    .col-l {
        gap: var(--header-top-gap-outter);
    }
}
</style>
