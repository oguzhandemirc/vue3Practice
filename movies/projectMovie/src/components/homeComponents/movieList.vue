<template>
  <div class="HomePage">
    <div class="px-10 pt-3">
      <div class="flex justify-center pb-3">
        <form @submit.prevent="">
          <!-- <input
            v-model="store.searchTerm"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ara"
            required
          /> -->
        </form>

        <form class="pl-4 flex flex-col flex items-center justify-center">
          <input
            v-model="store.searchAPI"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex items-center justify-center documentInput"
            placeholder="Apiden Sorgula"
            required
          />
          <button
            class="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-2 px-10 rounded-full"
            @click.prevent="store.getReqSearch(), store.cleaning()"
          >
            {{ store.buttonText }}
          </button>
        </form>
      </div>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center arrayList"
      >
        <li
          v-for="film in store.movies.slice(0, 3)"
          :key="film.id"
          class="mb-5 rounded overflow-hidden shadow-lg"
        >
          <img
            class="w-full"
            :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`"
            alt="movie poster"
          />
          <div class="p-6">
            <div class="font-bold text-2xl mb-2">{{ film.title }}</div>
            <p class="text-gray-700 text-base">
              {{ film.overview }}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ film.release_date }}</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ film.original_language }}</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ film.id }}</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ film.popularity }}</span
            >
          </div>
        </li>
      </ul>
      <!-- apiden arama son -->
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center documentList"
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
    <div
      class="flex items-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6 pagination"
    >
      <div class="flex flex-1 justify-start">
        <p class="text-sm text-gray-700">
          Showing
          {{ " " }}
          <span class="font-medium">{{ store.pageCount }}</span>
          {{ " " }}
          of
          {{ " " }}
          <span class="font-medium">{{ store.maxPage }}</span>
        </p>
      </div>
      <div class="sm:flex sm:flex-1 justify-end apilist">
        <ul class="flex isolate inline-flex -space-x-px rounded-md shadow-sm">
          <li>
            <button
              class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <ChevronLeftIcon
                @click="store.prevPage"
                class="h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </li>
          <li class="pr-3 pagination" v-for="item in store.paginatedNumbers" :key="item">
            <button
              @click="
                store.setPage(item);
                console.log(item);
              "
              class="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              :class="[
                store.pageCount === item ? 'bg-indigo-600' : 'bg-white text-gray-900',
              ]"
            >
              {{ item }}
            </button>
          </li>
          <li>
            <button
              class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <ChevronRightIcon
                class="h-5 w-5"
                aria-hidden="true"
                @click="store.nextPage"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";
import { useCounterStore } from "@/stores/counter.js";
const store = useCounterStore();
</script>

<style></style>
