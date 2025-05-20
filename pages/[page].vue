<script setup>
const route = useRoute()
import { useApiRequest } from "@/composables/useApiRequest"
import ConstructorRender from "~/components/common/constructor-render.vue";
const { data, status } = useApiRequest(route.params.page, 'api/page/get-by-slug',
    { lang: 'uk', slug: route.params.page },
)
</script>

<template>
    <div v-if="status === 'pending'" class="preloader">
        loading ...
    </div>
    <div v-if="status === 'success'">
        <ConstructorRender :constructor="data.constructor" />
    </div>
</template>

<style scoped>
</style>