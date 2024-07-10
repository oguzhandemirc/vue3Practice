<template>
  <div>
    <div class="flex bg-white mt-3 w-full">
      <TodoForm />
      <TodoList />
    </div>
    <TodoCount class="flex" />
    
  </div>
</template>
<script setup>
import TodoCount from "../widgets/TodoCount.vue";
import TodoList from "../widgets/ToDoList.vue";
import TodoForm from "../widgets/ToDoForm.vue";
</script>
