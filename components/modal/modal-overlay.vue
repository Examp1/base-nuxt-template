<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
const emit = defineEmits(["close"]);
onMounted(() => {
    document.body.style.overflow = "hidden";
});
onBeforeUnmount(() => {
    document.body.style.overflow = "";
});
</script>
<template>
    <div class="modal-overlay" @click.self="emit('close')">
        <div class="modal-content bg-light">
            <div class="modal-content-top">
                <div class="close-btn btn text sm" @click="emit('close')">
                    {{ $t("close_btn") }} <i class="icon-x"></i>
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
    position: fixed;
    z-index: 10000;
    background-color: rgba(#000, 0.7);
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &:has(.success) {
        .close-btn {
            color: #fff;
        }
    }
}
:deep(.modal-content) {
    position: relative;
    max-width: var(--modal-width-md);
    width: 100%;
    .form-body {
        padding: var(--modal-padding-sm) var(--modal-padding-md)
            var(--modal-padding-md) var(--modal-padding-md);
    }
}
.modal-content-top {
    display: grid;
    padding: var(--modal-padding-md);
    justify-content: end;
    @include bp-768 {
        padding: var(--card-wrap-padding-md) var(--card-wrap-padding-md) 32px
            var(--card-wrap-padding-md);
    }
}
</style>
