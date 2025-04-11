<script setup>
defineProps({
    content: {
        type: Object,
        required: true,
    },
});
const themes = ["theme1", "theme2", "theme3", "theme1"];
</script>
<template>
    <div class="container bg-color">
        <div class="text-block">
            <div class="block-title xxxl">{{ content.title }}</div>
            <div
                class="block-title xxl no-paddings"
                v-html="content.text"
            ></div>
        </div>
        <div class="theme-switcher-wrapper jcc">
            <div class="theme-switcher">
                <div
                    v-for="theme in themes"
                    :key="theme"
                    :class="theme"
                    class="theme"
                ></div>
            </div>
        </div>
        <div class="spotify-widget" v-html="content.spotify_widget"></div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: var(--card-wrap-padding-xxl);
    display: grid;
    justify-content: center;
    text-align: center;
    gap: 60px;
    border-radius: var(--card-border-radius-md);
}
.text-block {
    display: grid;
    gap: 24px;
}
.theme-switcher {
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: #f4f4ff;
    max-width: 205px;
    .theme {
        cursor: pointer;
        display: flex;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        padding: 4px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        position: relative;
        z-index: 1;
        &::after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            border-radius: 50%;
        }
        &::before {
            content: "";
            width: 125%;
            height: 125%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            background-color: #fff;
            border-radius: 50%;
        }
        &1 {
            &.active {
                &::before {
                    border: 1px solid #ff4c30;
                }
            }
            &::after {
                background-color: #ff4c30;
            }
        }
        &2 {
            &.active {
                &::before {
                    border: 1px solid #00749a;
                }
            }
            &::after {
                background-color: #00749a;
            }
        }
        &3 {
            &.active {
                &::before {
                    border: 1px solid #4d4dfa;
                }
            }
            &::after {
                background-color: #4d4dfa;
            }
        }
        &4 {
            &.active {
                &::before {
                    border: 1px solid #ff8800;
                }
            }
            &::after {
                background-color: #ff8800;
            }
        }
    }
}
:deep(.spotify-widget) {
    display: flex;
    justify-content: center;
    iframe {
        max-width: 320px;
        height: 80px;
        @include bp-768 {
            height: 100px;
        }
    }
}
</style>
