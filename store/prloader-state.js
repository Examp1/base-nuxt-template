// usage 
// import preloaderStore from "@/store/prloader_state";
// const { preloader_state } = storeToRefs(preloaderStore())

import { defineStore } from "pinia";
export default defineStore("preloaderStore", {
  state: () => ({
    preloader_state: 'null',
  }),
  actions: {
    updatePreloaderState(preloader_state) {
      this.preloader_state = preloader_state;
    },
  },
});
