<script setup>
import { computed } from "vue";
import sprite from "~/assets/img/stack/sprite.svg";

const props = defineProps({ id: { type: String, required: true } });
const imgPath = computed(() => {
    return `${sprite}#${props.id}`;
});
</script>
<template>
    <img :src="imgPath" alt="" />
</template>
