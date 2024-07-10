<template>
  <div class="w-1/2 pl-4 pr-4 pb-4 h-full bg-white shadow-md">
    <h1 class="justify-center text-3xl mb-2 text-center text-secondary">
      Yapılacaklar Listesi
    </h1>

    <ul class="list-disc justify-between item-center h-38 overflow-y-auto">
      <li
        v-for="(item, index) in counterStore.messageList"
        :key="index"
        class="flex ml-auto"
        :class="{ 'line-through': item.done }"
      >
        {{ item }}
        <div class="flex ml-auto">
          <button class="text-right mr-2" @click="done(index)">
            <i
              :class="[
                'pi',
                item.done
                  ? 'pi-check-circle text-green-600'
                  : 'pi-check hover:text-secondary',
              ]"
            ></i>
          </button>
          <button class="text-right" @click="deleteOne(index)">
            <i class="pi pi-times hover:text-secondary"></i>
          </button>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter.js";
import { onMounted } from "vue";
const counterStore = useCounterStore();

onMounted(() => {
  const item = localStorage.getItem("key");
  if (item) {
    counterStore.messageList = JSON.parse(item);
  }
});

const deleteOne = (index) => {
counterStore.messageList.splice(index,1);
localStorage.setItem("key", JSON.stringify(counterStore.messageList));
  
};

const done = (index) => {
  counterStore.messageList[index].done = !counterStore.messageList[index].done;
  localStorage.setItem("key", JSON.stringify(counterStore.messageList));
};


</script>
