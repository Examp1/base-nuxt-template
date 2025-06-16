<script setup>
import { computed, ref } from "vue";
const route = useRoute();
const currentLocation = computed(() => {
    return `https://sidev.digital/${route.path}`;
});
const isCopy = ref(false);
const copyLink = (event) => {
    event.target.classList.add("active");
    const url = location.href;
    navigator.clipboard
        .writeText(url)
        .then(() => {
            isCopy.value = true;
        })
        .catch((err) => {
            console.error("Error copying link: ", err);
        });
    setTimeout(() => {
        isCopy.value = false;
    }, 2000);
};
</script>

<template>
    <div class="sharing-block">
        <div class="socials">
            <a
                :href="`https://www.facebook.com/sharer/sharer.php?u=${currentLocation}`"
                class="social-link icon-facebook"
            ></a>
            <a
                :href="`https://www.linkedin.com/shareArticle?mini=true&url=${currentLocation}`"
                class="social-link icon-linkedin"
            ></a>
            <a
                :href="`https://twitter.com/intent/tweet?url=${currentLocation}`"
                class="social-link icon-twitter-simple"
            ></a>
            <div
                @click="copyLink($event)"
                class="social-link icon-link copy-btn"
                :class="{'active': isCopy}"
            >
                <span>copy</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.socials {
    display: flex;
    gap: 16px;
    position: sticky;
    top: 0;
    .social-link {
        transition: .3s;
        width: 46px;
        height: 46px;
        border: 1px solid #000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: #000;
        cursor: pointer;
        &:hover{
            color: #fff;
            background-color: #000;
        }
        @include bp-576{
            width: 35px;
            height: 35px;
            font-size: 16px;
        }
    }
}
.copy-btn {
    position: relative;
    &.active span {
        visibility: visible;
        opacity: 1;
    }
    span {
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;
        position: absolute;
        bottom: -45px;
        left: -30px;
        border-radius: 5px;
        border: 1px solid var(--social-border-default);
        padding: 5px 15px;
        font-size: 16px;
        font-weight: 400;
        line-height: 160%;
    }
}
</style>
