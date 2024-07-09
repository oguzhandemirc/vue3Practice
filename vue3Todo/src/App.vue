<template>
  <div class="h-3/6 bg-white rounded rounded-2xl mt-52 ml-20 mr-20">
    <div class="flex flex-col pl-4 pt-4 pb-4 bg-gray-100 w-full">
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-primary md:text-5xl lg:text-6xl"
      >
        Vue Todo App
      </h1>
      <p class="mb-6 text-lg font-normal dark:text-gray-400">
        Unutmamak için harika bir yol..
      </p>
    </div>
    <div class="flex bg-white mt-3 w-full">
      <!-- Sol Taraf -->
      <div class="w-1/2 h-full p-4 bg-white shadow-md mr-10">
        <textarea
          class="w-full h-3/4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Yapacaklarınızı buraya yazınız..."
          rows="5"
        ></textarea>
        <div class="flex">
          <button
            @click="addTodo"
            class="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
          >
            Ekle
          </button>
          <button
            @click="deleteAllTodos"
            class="ml-auto mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
          >
            Hepsini Sil
          </button>
        </div>
      </div>
      <!-- Sağ Taraf -->
      <div class="w-1/2 pl-4 pr-4 pb-4 h-full bg-white shadow-md">
        <h1 class="justify-center text-3xl mb-2 text-center text-secondary">
          Yapılacaklar Listesi
        </h1>
        <ul class="list-disc justify-between item-center h-44 overflow-y-auto">
          <li
            class="mr-4 flex ml-auto"
            v-for="(item, index) in list"
            :key="index"
            :class="{ 'line-through': item.done }"
          >
            {{ item.text }}
            <div class="flex ml-auto">
              <button class="text-right mr-2" @click="done(index)">
                <!-- <i class="pi pi-check hover:text-secondary"></i> -->
                <i
                  :class="[
                    'pi',
                    item.done
                      ? 'pi-check-circle text-green-600'
                      : 'pi-check hover:text-secondary',
                  ]"
                ></i>
              </button>
              <button class="text-right" @click="deleteTodo(index)">
                <i class="pi pi-times hover:text-secondary"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      :style="{ display: list.length === 0 ? 'none' : 'flex' }"
      class="flex flex-col pt-3 space-y-2 items-end text-red-secondary"
    >
      <div>
        <p>
          Listede <span class="text-cyan-700">{{ list.length }}</span> toplam iş
          var.
        </p>
      </div>
      <div>
        <p>
          Listede henüz yapılmamış
          <span class="text-cyan-700">{{
            list.filter((item) => !item.done).length
          }}</span>
          iş var.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>

<script setup>
import { ref, onMounted, reactive } from "vue";

const doneCount = reactive({ count: 0 });
const notdoneCount = reactive({ count: 0 });

const list = ref([]);

const addTodo = () => {
  const newTodo = document.querySelector("textarea");
  if (newTodo.value === "") {
    alert("Boş bırakılamaz");
  } else {
    list.value.push({ text: newTodo.value, done: false });
  }
  newTodo.value = "";
  newTodo.focus();
  // console.log(list.value);
  localStorage.setItem("my-items", JSON.stringify(list.value));
};

const done = (index) => {
  list.value[index].done = !list.value[index].done;
  // console.log(list.value);
  localStorage.setItem("my-items", JSON.stringify(list.value));
  console.log(localStorage.getItem("my-items"));
};

const deleteTodo = (index) => {
  list.value.splice(index, 1);
  // console.log(list.value);
  localStorage.setItem("my-items", JSON.stringify(list.value));
  console.log(localStorage.getItem("my-items"));
};

onMounted(() => {
  const items = localStorage.getItem("my-items");
  if (items) {
    list.value = JSON.parse(items);
  }
});

const deleteAllTodos = () => {
  list.value = [];
  localStorage.setItem("my-items", JSON.stringify(list.value));
};

console.log(localStorage.getItem("my-items"));

console.log(list.value.length);
</script>
