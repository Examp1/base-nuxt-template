<template>
    <div v-if="btn.type_link === 'form'" class="btn" @click="loadForm(btn.form_id)" :class="[btn.size, btn.type]">{{ btn.text }}</div>
    <NuxtLink v-else :to="btn.link" class="btn" :class="[btn.size, btn.type]">{{ btn.text }}</NuxtLink>
</template>

<script setup>

defineProps({
    btn: {
        type: Object,
        required: true
    }
})

const loadForm = (form_id) => {
    alert(`form_id: ${form_id}`)
}

</script>

<style lang="scss" scoped></style>