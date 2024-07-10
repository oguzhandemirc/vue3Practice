<template>
  <Main />
</template>

<style scoped></style>

<script setup>
import { ref, onMounted, reactive } from "vue";
import Main from "./views/todo/index.vue";
import { useCounterStore } from "./views/todo/stores/counter.js";

const counterStore = useCounterStore();

// const list = ref([]);

// const addTodo = () => {
//   const newTodo = document.querySelector("textarea");
//   if (newTodo.value === "") {
//     alert("Boş bırakılamaz");
//   } else {
//     list.value.push({ text: newTodo.value, done: false });
//   }
//   newTodo.value = "";
//   newTodo.focus();
//   // console.log(list.value);
//   localStorage.setItem("my-items", JSON.stringify(list.value));
// };

// const done = (index) => {
//   list.value[index].done = !list.value[index].done;
//   // console.log(list.value);
//   localStorage.setItem("my-items", JSON.stringify(list.value));
//   console.log(localStorage.getItem("my-items"));
// };

// const deleteTodo = (index) => {
//   list.value.splice(index, 1);
//   // console.log(list.value);
//   localStorage.setItem("my-items", JSON.stringify(list.value));
//   console.log(localStorage.getItem("my-items"));
// };

// onMounted(() => {
//   const items = localStorage.getItem("my-items");
//   if (items) {
//     list.value = JSON.parse(items);
//   }
// });

// const deleteAllTodos = () => {
//   list.value = [];
//   localStorage.setItem("my-items", JSON.stringify(list.value));
// };

// console.log(localStorage.getItem("my-items"));

// console.log(list.value.length);
</script>
