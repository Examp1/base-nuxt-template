<script setup></script>

<template>
    <div class="page-preloader">
        <div class="loader"></div>
    </div>
</template>
<style lang="scss" scoped>
.page-preloader {
    position: fixed;
    inset: 0px;
    background-color: #fff;
    z-index: 100000;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* HTML: <div class="loader"></div> */
.loader {
    width: fit-content;
    font-size: 40px;
    font-family: system-ui, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: #0000;
    -webkit-text-stroke: 1px #000;
    background:
        conic-gradient(from -135deg at 100% 50%, #000 90deg, #0000 0) text
            no-repeat,
        conic-gradient(from -135deg at 1lh 50%, #0000 90deg, #000 0) text
            no-repeat;
    animation: l6 2s linear infinite;
}
.loader:before {
    content: "Sisi.dev";
}
@keyframes l6 {
    0% {
        background-size: 0 200%;
        background-position:
            0 0,
            100% 0;
    }
    50% {
        background-size: calc(60% + 0.5lh) 200%;
        background-position:
            0 0,
            100% 0;
    }
    50.01% {
        background-size: calc(60% + 0.5lh) 200%;
        background-position:
            0 100%,
            100% 100%;
    }
    100% {
        background-size: 0 200%;
        background-position:
            0 100%,
            100% 100%;
    }
}
</style>
