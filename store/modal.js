import { defineStore } from "pinia";
export const useModalStore = defineStore("modalStore", {
    state: () => ({
        activeModal: null,
    }),
    actions: {
        openModal(modalName) {
            this.activeModal = modalName;
        },
        closeModal() {
            this.activeModal = null;
        },
    },
});
