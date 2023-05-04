import { defineStore } from "pinia";

export const useSomethingStore = defineStore("something", {
  state: () => {
    return {
      something: "example",
    };
  },
  actions: {
    setSomething(value) {
      this.something = value;
    },
  },
  getters: {
    getTheme: (state) => {
      return state.something;
    },
  },
});
