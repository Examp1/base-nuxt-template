<script setup>
import { useSettingStore } from "~/store/app-settings.js";
const { contactSettings, logosSettings, footerMenu } =
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
                        v-for="li in footerMenu"
                        :to="li.url"
                        class="block-title md"
                    >
                        {{ li.name }}
                    </NuxtLink>
                </div>
                <div class="footer-contacts-info">
                    <div class="block-title md">Пишіть нам в месенджери:</div>
                    <a
                        v-for="messenger in contactSettings.messengers"
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
                    <div class="form-field required sm-md" id="form-cta-input">
                        <input
                            type="email"
                            placeholder="name@company.com"
                            name="email"
                        />
                        <span class="error"></span>
                    </div>
                    <button
                        type="submit"
                        class="btn sm-md fill"
                        id="form-cta-btn"
                    >
                        Підписатись
                    </button>
                </form>
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
}
</style>
