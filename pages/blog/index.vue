<script setup>
import appCard from "~/components/card/app-card.vue";
import { useApiRequest } from "@/composables/useApiRequest";
const { data, status } = useApiRequest("api/blog/article/list", {
    page: 1,
});
const enhanceCard = (article) => {
    return {
        title: article.name,
        link: article.url,
        colorText: article.public_date,
        wrapPadding: "none",
        bodyPadding: "md",
        hideHead: true,
        gap: "md",
        image: article.image,
        cardType: 'horizontal',
        // noBg: true,
        titleSize: 'xxl',
        imgSize: 'xl',
        imgRounding: "none",
    };
};
</script>

<template v-if="status === 'success'">
    <div class="container">
        <div class="cards-wrapper card-in-row-2 mt-MD mb-MD">
            <appCard
                v-for="article in data.items"
                :card="enhanceCard(article)"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
