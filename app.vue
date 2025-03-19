<template>
  <div>
    <NuxtLoadingIndicator />
    <TheHeader></TheHeader>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
<script setup>
import { useWindowSizeRange } from '~/composables/useWindowSizeRange';
import TheHeader from './components/nav/header/the-header.vue';
useWindowSizeRange();

</script>

<style lang="scss" scoped></style>