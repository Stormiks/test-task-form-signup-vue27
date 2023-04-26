import { defineStore } from "pinia";

const useExStore = defineStore("exStore", {
  state: () => ({
    exKey: 0,
  }),
  actions: {
    exAction() {
      console.log('call method "exAction"');
    },
  },
});

export default {
  useExStore,
};
