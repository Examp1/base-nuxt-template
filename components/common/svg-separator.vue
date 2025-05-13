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
            viewBox="0 0 1441 729"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M720.556 728.619H0.532715V10.8584C600.55 10.8584 730.555 488.612 720.556 728.619Z"
                fill="white"
            />
            <path
                d="M720.336 728.619H1440.36V10.8584C840.342 10.8584 710.336 488.612 720.336 728.619Z"
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
