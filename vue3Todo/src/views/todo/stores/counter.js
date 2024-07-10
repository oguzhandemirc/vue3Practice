// Example File Path:
// ./src/stores/counter.js

import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    list: ref([]),
    count: 0,
    message: ["1", "2", "3"],
    messageList: [],
  }),
  actions: {
    // addTodo() {
    //   const newTodo = document.querySelector("#todos");
    //   const newTodoValue = newTodo.value;
    //   console.log(newTodoValue);
    //   //   if (newTodo.value === "") {
    //   //     alert("Boş bırakılamaz");
    //   //   } else {
    //   //     this.list.value.push({ text: newTodo.value, done: false });
    //   //   }
    //   //   console.log(this.list.value + "list");
    //   //   newTodo.value = "";
    //   //   newTodo.focus();
    //   //   // console.log(list.value);
    //   localStorage.setItem("my-items", JSON.stringify(newTodoValue)); //
    //   console.log(localStorage.getItem("my-items"));
    //   this.list = JSON.parse(localStorage.getItem("my-items"));
    //   console.log(this.list);

    //   //   console.log(this.list);
    // },

    saveTodo() {
      const textarea = document.querySelector("#todos");
      this.messageList.push(textarea.value);
      if (textarea.value === " ") {
        console.log("Boş bırakılamaz");
        window.alert("Boş bırakılamaz");
      } else {
        localStorage.setItem("key", JSON.stringify(this.messageList));
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
