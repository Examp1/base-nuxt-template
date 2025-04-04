<script setup lang="ts">
import { computed } from "vue";
import AppSectionTitle from "~/components/common/app-section-title.vue";
const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});
const transformedImagesList = computed(() => {
    const originalList = props.content.list;
    const listLength = originalList.length;

    if (listLength >= 10) {
        return originalList;
    }

    const extendedList = [...originalList];

    while (extendedList.length < 10) {
        const indexToCopy = extendedList.length % listLength;
        extendedList.push({ ...originalList[indexToCopy] });
    }

    return extendedList;
});
</script>
<template>
    <div v-if="content?.title" class="container">
        <AppSectionTitle
            :title="content.title"
            :title-position="'tac'"
        ></AppSectionTitle>
    </div>
    <div class="marquee-infinite">
        <div class="marquee">
            <div class="marquee-wrp">
                <img
                    v-for="(item, index) in transformedImagesList"
                    :src="path(item.img)"
                    alt="image"
                    :key="index"
                />
            </div>
            <div class="marquee-wrp">
                <img
                    v-for="(item, index) in transformedImagesList"
                    :src="path(item.img)"
                    alt="image"
                    :key="index"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.marquee-infinite {
    width: 100%;
    height: fit-content;
    overflow: hidden;
}
.marquee-wrp {
    padding: 10px;
    img {
        max-height: 100px;
        object-fit: contain;
    }
}
.marquee {
    display: flex;
    justify-content: space-around;
    width: 200%;
    height: fit-content;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    animation: marquee-infinite 35s linear infinite;

    &-wrp {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        gap: 10px;
        img {
            max-height: 100px;
            object-fit: contain;
        }
    }

    @media (max-width: 650px) {
        width: 600%;

        &-wrp {
            width: 300%;
        }
    }
}

@keyframes marquee-infinite {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>
