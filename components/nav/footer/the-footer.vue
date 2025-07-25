<script setup>
import { useSettingStore } from "~/store/app-settings.js";
import LangSwitcherV2 from "../lang-switchers/lang-switcher-v-2.vue";
const { contactSettings, logosSettings, footerMenu, navBarMenu } =
    storeToRefs(useSettingStore());
const route = useRoute();
const bgType = computed(() => {
    return {
        main: route.name.includes("index") ? "bg-light-2" : "bg-light",
        container: !route.name.includes("index") ? "bg-light-2" : "bg-light",
    };
});
</script>
<template>
    <footer class="bg-none" :class="bgType.main">
        <div class="container footer-container" :class="bgType.container">
            <div class="footer-top-side">
                <div class="credo aic">
                    <img
                        :src="getPath(logosSettings.footer)"
                        alt="footer logo"
                        class="footer-logo"
                    />
                    <div class="block-title lg text-brand">
                        Стабільність. Масштабованість. Надійність
                    </div>
                </div>
                <div class="accent-block">
                    <h2 class="block-title xxl">Сайти, які роблять жінки</h2>
                    <div class="block-text sm">Від ідеї до реалізації</div>
                </div>
            </div>
            <div class="footer-socials">
                <a
                    :href="soc.link"
                    target="_blank"
                    v-for="(soc, idx) in contactSettings.socials"
                    :key="'soc' + idx"
                    class="soc-link"
                    :class="`icon-${soc.type}`"
                ></a>
            </div>
            <div class="footer-body">
                <div
                    v-for="(li, idx) in footerMenu"
                    :key="'footerMenuLink' + idx"
                    class="footer-menu"
                >
                    <NuxtLink :to="li.url" class="block-title md">
                        {{ li.name }}
                    </NuxtLink>
                </div>
                <div class="footer-contacts-info">
                    <div class="block-title md">Пишіть нам в месенджери:</div>
                    <template
                        v-for="(messenger, idx) in contactSettings.messengers"
                    >
                        <a
                            v-if="messenger?.nikname"
                            :key="'messanger' + idx"
                            :to="messenger.link"
                            class="nav-link md"
                            style="display: block"
                        >
                            {{ messenger.type }}: {{ messenger.nikname }}
                        </a>
                    </template>
                </div>
            </div>
            <div class="footer-cta">
                <div class="block-title md">
                    Узнавайте першими про оновлення та важливі новини Sisi.dev
                </div>
                <form class="form-cta" data-form="4385">
                    <div class="form-field required md" id="form-cta-input">
                        <input
                            type="email"
                            placeholder="name@company.com"
                            name="email"
                        />
                        <span class="error"></span>
                    </div>
                    <button type="submit" class="btn md fill" id="form-cta-btn">
                        Підписатись
                    </button>
                </form>
            </div>
            <div class="footer-bottom-side">
                <div class="footer-bottom-menu">
                    <LangSwitcherV2 />
                    <NuxtLink
                        v-for="li in footerMenu"
                        class="nav-link sm"
                        :to="li.url"
                    >
                        {{ li.name }}
                    </NuxtLink>
                </div>
                <div class="nav-link sm">
                    Зроблено з любовʼю в Україні <span>💛💙</span> Sisi.dev©
                    2025
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    position: relative;
    z-index: 1;
    .footer-container {
        border-radius: var(--container-border-radius-md)
            var(--container-border-radius-md) 0px 0px;
        padding: var(--container-warp-padding-y-lg)
            var(--container-warp-padding-x-lg);
        display: grid;
        gap: 32px;
    }
    .footer-logo {
        max-width: 80px;
        object-fit: contain;
    }
    .footer-top-side {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 60px;
        .credo {
            gap: 24px;
            @include bp-768 {
                flex-direction: column;
                text-align: center;
            }
        }
        .accent-block {
            text-align: center;
            border-radius: 12px;
            background: var(--bg-accent);
            padding: 48px;
            display: grid;
            gap: 20px;
        }
        @include bp-768 {
            grid-template-columns: 1fr;
        }
    }
    .footer-body {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        @include bp-768 {
            grid-template-columns: repeat(2, 1fr);
        }
        .block-title {
            padding: var(--nav-link-padding-md);
        }
    }
    .footer-cta {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: var(--footer-form-wrap-gap);
        .form-cta {
            display: flex;
            gap: 8px;
        }
        @include bp-768 {
            grid-template-columns: 1fr;
        }
    }

    .footer-bottom-side {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid var(--border-light);
        padding: var(--footer-bottom-padding-y, 16px) 0px;
        @include bp-768 {
            flex-direction: column;
            align-items: center;
        }
        .footer-bottom-menu {
            display: flex;
            @include bp-768 {
                flex-direction: column;
                align-items: center;
            }
        }
    }
}
.soc-link {
    color: #fff;
    width: 36px;
    height: 36px;
    background-color: #000;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-right: 5px;
}
</style>
