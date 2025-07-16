<script setup>
import ConstructorRender from "~/components/common/constructor-render.vue";
const route = useRoute();
import { useApi2 } from "../composables/useApi";
const { data, status } = await useApi2("/api/page/get-by-slug", {
    slug: route.params.page,
});

</script>

<template>
    <div v-if="status === 'pending'" class="preloader">loading ...</div>
    <div v-if="status === 'success'">
        <ConstructorRender :constructor="data.constructor" />
    </div>
</template>

<style scoped></style>
