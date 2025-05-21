<script setup>
const route = useRoute()
import { useApiRequest } from "@/composables/useApiRequest";
import ConstructorRender from "~/components/common/constructor-render.vue";
const { data, status } = useApiRequest('api/page/get-by-slug',
    { slug: route.params.page },
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