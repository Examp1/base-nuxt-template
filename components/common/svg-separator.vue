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
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 490"
            fill="none"
        >
            <path
                d="M983.245 703.001H-0.242188V0.0917969C819.327 0.0917969 996.903 375.172 983.245 703.001Z"
                fill="white"
            />
            <path
                d="M936.619 703.001H1920.11V0.0917969C1100.54 0.0917969 922.961 375.172 936.619 703.001Z"
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
