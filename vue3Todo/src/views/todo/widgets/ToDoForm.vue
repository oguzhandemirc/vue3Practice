<template>
  <div class="w-1/2 h-full p-4 bg-white shadow-md mr-10">
    <textarea
      class="w-full h-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Yapacaklarınızı buraya yazınız..."
      rows="5"
      id="todos"
    ></textarea>
    <div class="flex">
      <button
        @click="counterStore.saveTodo"
        class="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
      >
        Ekle
      </button>

      <button
        @click="counterStore.deleteTodo"
        class="ml-auto mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
      >
        Hepsini Sil
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter.js";
const counterStore = useCounterStore();
</script>

<style scoped></style>
