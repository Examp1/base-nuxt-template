<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

defineProps({
    constructor: {
        type: Object,
        default: () => ({}),
        required: true,
    },
    constructorMainScreen: {
        type: Object,
        default: () => ({}),
    },
});

const asyncComponents = {
    "simple-text": defineAsyncComponent(
        () => import("~/components/constructor//simple-text.vue")
    ),
    "card-1": defineAsyncComponent(
        () => import("~/components/constructor/card-1.vue")
    ),
    "card-2": defineAsyncComponent(
        () => import("~/components/constructor/card-2.vue")
    ),
    "first-screen": defineAsyncComponent(
        () => import("~/components/first-screens/first-screen.vue")
    ),
};

const route = useRoute();

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".constructor-container", {
        ease: "none",
        scrollTrigger: {
            trigger: ".constructor-container",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            pin: ".main-screen-container",
            anticipatePin: 1,
            pinSpacing: false,
            markers: true,
        },
    });

    // gsap.to(".ass", {
    //     clipPath: `polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)`,
    //     scrollTrigger: {
    //         trigger: ".ass",
    //         start: "top center",
    //         end: "bottom+=300 center",
    //         scrub: true,
    //         pin: true,
    //         anticipatePin: 1,
    //         pinSpacing: false,
    //         markers: true,
    //     },
    // });
    // const timeline = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".ass", // Триггер для анимации
    //         start: "top center", // Начало анимации
    //         end: "bottom+=300 center", // Конец анимации
    //         scrub: true, // Плавная анимация, привязанная к скроллу
    //         pin: true, // Фиксируем контейнер на время анимации
    //         anticipatePin: 1, // Улучшает плавность фиксации
    //         markers: true, // Для отладки (можно убрать в production)
    //     },
    // });
    // timeline.to(".ass", {
    //     clipPath: `polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)`,
    // });
    // timeline.to('.ass', {
    //     x: 400,
    //     rotate: 360 
    // })
    // timeline.to('.ass', {
    //     x: -400,
    //     rotate: 0 
    // })

    // // Анимация для .ass2
    // timeline.to(
    //     ".ass2",
    //     {
    //         clipPath: `polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)`,
    //     },
    //     "<" // Запускаем одновременно с предыдущей анимацией
    // );
});
</script>

<template>
    <div class="index">
        <div class="main-screen-container">
            <section
                v-for="(
                    { component, visible, content }, idx
                ) in constructorMainScreen"
                :key="`${component}-${idx}`"
                :class="`mt-${content.top_separator} mb-${content.bottom_separator} ${content.preset} block-${component} section-separator-${content.separator_section}`"
            >
                <component
                    :is="asyncComponents[component]"
                    :content="content"
                ></component>
            </section>
        </div>
        <div class="constructor-container">
            <!-- <div class="ass"></div>
            <div class="ass2"></div> -->
            <div class="separator-container">
                <svg
                    viewBox="0 0 1440 415"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M715.913 380.32C721.342 253.3 650.756 0.458008 324.976 0.458008L0.0869141 0.458008L0.0869141 414.844L1439.91 414.844V0.458008L1115.51 0.458008C789.735 0.458008 719.148 253.3 724.577 380.32H715.913Z"
                        fill="#EBEBF0"
                    />
                </svg>
            </div>
            <section
                v-for="({ component, visible, content }, idx) in constructor"
                :key="`${component}-${idx}`"
                :class="`mt-${content.top_separator} mb-${content.bottom_separator} ${content.preset} block-${component} section-separator-${content.separator_section}`"
            >
                <component
                    :is="asyncComponents[component]"
                    :content="content"
                ></component>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.separator-container {
    width: 100%;
    height: auto;
    margin-bottom: -5px;
    background-color: transparent;
}
.ass {
    width: 200px;
    height: 200px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background-color: red;
}
.ass2 {
    width: 200px;
    height: 200px;
    clip-path: polygon(
        10% 25%,
        35% 25%,
        35% 0%,
        65% 0%,
        65% 25%,
        90% 25%,
        90% 50%,
        65% 50%,
        65% 100%,
        35% 100%,
        35% 50%,
        10% 50%
    );
    background-color: green;
    /* polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%) */
}
.index {
    .main-screen-container {
        padding-top: 260px;
        padding-bottom: 300px;
        background-color: #000;
        & > section {
            background-color: #000;
        }
        &.active {
            position: fixed;
            z-index: 0;
        }
    }
    .constructor-container {
        z-index: 2;
        overflow-x: hidden;
        position: relative;
    }
    .simple-text:first-of-type .redactor > * {
        color: var(--text-light);
    }
}
</style>
