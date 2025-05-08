<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
const emit = defineEmits(["close"]);
onMounted(() => {
    document.body.style.overflow = "hidden";
});
onBeforeUnmount(() => {
    document.body.style.overflow = "";
});

const isSuccess = false

</script>
<template>
    <div class="modal-overlay" @click.self="emit('close')">
        <div class="modal-content">
            <div class="close-btn btn text sm" :class="{'bg-color': isSuccess}" @click="emit('close')">
                {{ $t("close_btn") }} <i class="icon-x"></i>
            </div>
            <slot @success="isSuccess = true"/>
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
}
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
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
</style>
