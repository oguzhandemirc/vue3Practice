// Example File Path:
// ./src/stores/counter.js

import { defineStore } from "pinia";
import { onUpdated, ref } from "vue";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    list: ref([]),
    count: 0,
    message: ["1", "2", "3"],
    messageList: [],
  }),
  
  actions: {

    saveTodo() {
      const textarea = document.querySelector("#todos");
      this.messageList.push(textarea.value);
      if (textarea.value === " ") {
        console.log("Boş bırakılamaz");
        window.alert("Boş bırakılamaz");
      } else {
        console.log(this.messageList);
        console.log(localStorage.getItem("key"));
      
      }
    
    },
    getTodo() {
      this.messageList = JSON.parse(localStorage.getItem("key"));
      console.log(this.messageList);
    },
    deleteTodo() {
      localStorage.removeItem("key");
      this.messageList = [];
    },
    deleteOne(index) {
      console.log(index);
      counterStore.messageList.splice(index, 1);
      localStorage.setItem("key", JSON.stringify(counterStore.messageList));
    },
  },
});
