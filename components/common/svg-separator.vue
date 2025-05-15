<script setup>
defineProps({
    color: {
        type: String,
        default: "#EBEBF0",
    },
});
</script>
<template>
    <div class="separator-container bg-light-2">
        <svg
            width="1921"
            height="703"
            viewBox="0 0 1921 703"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M984.14 703H0.652344V0.0908203C820.222 0.0908203 997.798 375.171 984.14 703Z"
                fill="white"
            />
            <path
                d="M937.513 703H1921V0.0908203C1101.43 0.0908203 923.854 375.171 937.513 703Z"
                fill="white"
            />
        </svg>

        <!-- <svg
            viewBox="0 0 1440 415"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M715.913 380.32C721.342 253.3 650.756 0.458008 324.976 0.458008L0.0869141 0.458008L0.0869141 414.844L1439.91 414.844V0.458008L1115.51 0.458008C789.735 0.458008 719.148 253.3 724.577 380.32H715.913Z"
                :fill="color"
            />
        </svg> -->
    </div>
</template>

<style lang="scss" scoped>
.separator-container {
    width: 100%;
    height: auto;
    margin-bottom: -6px;
    background-color: transparent;
    transition: 0.3s;
    svg path {
        fill: var(--bg-default);
    }
}
</style>
