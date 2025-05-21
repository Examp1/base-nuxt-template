<script setup>
import appSectionTitle from "~/components/common/app-section-title.vue";
import { useSettingStore } from "@/store/app-settings.js";
import appForm from "../form/app-form.vue";

const { contactSettings } = storeToRefs(useSettingStore());
defineProps({
    content: {
        type: Object,
        required: true,
    },
});
const iconsList = {
    telegram: "icon-telegram",
    whatsapp: "icon-whatsapp",
    instagram: "icon-instagram",
    linkedin: "icon-linkedin-simple",
    facebook: "icon-facebook",
    tiktok: "icon-tiktok-simple",
};

const getIcon = (type) => {
    return iconsList[type];
};
</script>

<template>
    <div class="container">
        <appSectionTitle
            :title-position="'tac'"
            v-if="content?.title"
            :title="content.title"
        ></appSectionTitle>
        <div class="grid-50-50 sm">
            <div class="col-l">
                <div class="contact-item">
                    <div class="block-title lg">{{ $t("contacts.item1") }}</div>
                    <div class="btn-wrapper">
                        <a
                            v-for="messenger in contactSettings.messengers"
                            :href="messenger.link"
                            class="btn tint md"
                            :class="getIcon(messenger.type)"
                        >
                            {{ messenger.type }}</a
                        >
                    </div>
                </div>
                <div class="contact-item">
                    <div class="block-title lg">{{ $t("contacts.item3") }}</div>
                    <div class="btn-wrapper">
                        <a
                            v-for="social in contactSettings.socials"
                            :href="social.link"
                            class="btn tint md"
                            :class="getIcon(social.type)"
                        >
                            {{ social.type }}</a
                        >
                    </div>
                </div>
                <img src="" alt="" />
                <div class="contact-item">
                    <div class="block-title lg">{{ $t("contacts.item5") }}</div>
                    <div class="block-text sm">
                        {{ contactSettings.address }}
                    </div>
                </div>
            </div>
            <div class="col-r">
                <div class="contact-item">
                    <div class="block-title lg">{{ $t("contacts.item2") }}</div>
                    <div class="block-text sm schedule">
                        <span v-for="schedule_item in contactSettings.schedule"
                            >{{ schedule_item.title }} {{ schedule_item.time }}</span
                        >
                        <span v-for="schedule_item in contactSettings.schedule"
                            >{{ schedule_item.title }} {{ schedule_item.time }}</span
                        >
                    </div>
                </div>
                <div class="contact-item">
                    <appForm :content="contactSettings.form_data" :form_id="contactSettings.form_id"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col-l,
.col-r {
    display: grid;
    gap: var(--card-list-gap-lg);
}
.contact-item {
    padding: var(--card-wrap-padding-md);
    border-radius: var(--card-border-radius-md);
    background: var(--card-bg-default);
    .block-title {
        margin-bottom: 16px;
    }
    .schedule{
        display: flex;
        gap: 4px
    }
    .btn-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        .tint {
            &::before {
                color: var(--button-stroke-ic-default);
            }
            &:hover {
                &::before {
                    color: var(--button-stroke-ic-hover);
                }
            }
        }
    }
}
:deep(.contact-item) {
    .form-body{
        padding: 0;
        background-color: transparent;
    }
}
</style>
