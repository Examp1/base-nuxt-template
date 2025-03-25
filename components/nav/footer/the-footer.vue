<script setup>
import { useSettingStore } from "~/store/app-settings.js";
import LangSwitcherV2 from "../lang-switcher-v-2.vue";
const { contactSettings, logosSettings, footerMenu, navBarMenu } =
    storeToRefs(useSettingStore());
</script>
<template>
    <footer class="bg-none bg-light-2">
        <div class="container bg-light footer-container">
            <div class="footer-top-side">
                <div class="credo aic">
                    <img
                        :src="path(logosSettings.footer)"
                        alt="footer logo"
                        class="footer-logo"
                    />
                    <div class="block-title lg text-brand">
                        Стабільність. Масштабованість. Надійність
                    </div>
                </div>
                <div class="accent">
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
                    class="icon-facebook-circle"
                    style="color: #000; font-size: 36px"
                ></a>
            </div>
            <div class="footer-body">
                <div class="footer-menu">
                    <NuxtLink
                        v-for="(li, idx) in footerMenu"
                        :to="li.url"
                        :key="'footerMenuLink' + idx"
                        class="block-title md"
                    >
                        {{ li.name }}
                    </NuxtLink>
                </div>
                <div class="footer-contacts-info">
                    <div class="block-title md">Пишіть нам в месенджери:</div>
                    <a
                        v-for="(messenger, idx) in contactSettings.messengers"
                        :key="'messanger' + idx"
                        :to="messenger.link"
                        class="nav-link md"
                    >
                        {{ messenger.type }}: {{ messenger.nickname }}
                    </a>
                </div>
            </div>
            <div class="footer-cta">
                <div class="block-title md">
                    Узнавайте першими про оновлення та важливі новини БукКіпер
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
                    <div v-for="li in footerMenu" class="nav-link sm">
                        {{ li.name }}
                    </div>
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
        }
        .accent {
            text-align: center;
            border-radius: 12px;
            background: var(--bg-accent);
            padding: 48px;
            display: grid;
            gap: 20px;
        }
    }
    .footer-body {
        display: grid;
        grid-template-columns: 3fr 1fr;
        .footer-menu {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
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
    }

    .footer-bottom-side {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid var(--border-light);
        padding: var(--footer-bottom-padding-y, 16px) 0px;
        .footer-bottom-menu {
            display: flex;
        }
    }
}
</style>
