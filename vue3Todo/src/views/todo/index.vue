<template>
  <div class="h-3/6 bg-white mt-52 ml-20 mr-20">
    <Header />
    <div class="flex bg-white mt-3 w-full">
      <TodoForm />
      <TodoList />
    </div>
    <TodoCount class="flex" />
    <hr>
    
  </div>
</template>
<style scoped></style>
<script setup>
import TodoCount from "./widgets/TodoCount.vue";
import TodoList from "./widgets/ToDoList.vue";
import Header from "./components/Header.vue";
import TodoForm from "./widgets/ToDoForm.vue";
// import {useCounter} from "./stores/counter.js";

// const abc = useCounter();
</script>
