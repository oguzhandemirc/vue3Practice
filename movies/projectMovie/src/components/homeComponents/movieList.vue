<template>
  <div class="HomePage">
    <div class="px-10 pt-3">
      <div class="flex justify-center pb-3">
        <form @submit.prevent="">
          <input
            v-model="store.searchTerm"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ara"
            required
          />
        </form>
      </div>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center"
      >
        <li
          v-for="(movie, index) in store.filteredMovie"
          :key="index"
          class="mb-5 rounded overflow-hidden shadow-lg"
        >
          <img
            class="w-full"
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt="movie poster"
          />
          <div class="p-6">
            <div class="font-bold text-2xl mb-2">{{ movie.title }}</div>
            <p class="text-gray-700 text-base">
              {{ movie.overview }}
            </p>
            <br />
            <RouterLink :to="`/about/` + movie.id">
              <button
                @click="console.log(movie.id)"
                class="hover:text-blue-600 font-bold"
              >
                Details
              </button>
            </RouterLink>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ movie.release_date }}</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ movie.original_language }}</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ movie.id }}</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ movie.popularity }}</span
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter.js";
const store = useCounterStore();
</script>

<style></style>
