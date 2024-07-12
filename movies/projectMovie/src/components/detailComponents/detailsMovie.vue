<template>
  <div class="about px-10 pt-10 bg-pink-100 pb-10 rounded-lg shadow-lg pl-40">
    <div class="flex items-center">
      <div>
        <img
          class="rounded-2xl shadow-2xl"
          :src="`https://image.tmdb.org/t/p/w500/${movieStore.detailInfo.poster_path}`"
        />
      </div>
      <div class="ml-20">
        <h1
          class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          {{ movieStore.detailInfo.title }}
          <span class="text-blue-600 dark:text-blue-500 relasedate"
            >( {{ movieStore.releaseYear }} )</span
          >
        </h1>
        <p class="uppercase">
          {{ movieStore.detailInfo.release_date }} -
          {{ movieStore.detailInfo.original_language }}
        </p>
        <div
          class="mt-5 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl dark:text-white"
        >
          <h3>
            <span class="text-red-600 text-5xl">{{
              movieStore.detailInfo.vote_average
            }}</span>
            <span> Raiting </span>
          </h3>
        </div>
        <div class="flex">
          <h3 class="lg:text-2xl">
            <span class="text-blue-600 dark:text-blue-500 lg:text-3xl font-extrabold">{{
              movieStore.detailInfo.vote_count
            }}</span>
            Kişi Tarafından Oylandı
          </h3>
        </div>
        <div class="flex text-3xl font-extrabold">
          <p>
            {{ movieStore.detailInfo.popularity }}
            <span class="font-normal text-2xl">Kişi Tarafından İzledi</span>
          </p>
        </div>
        <div>
          <h2
            class="mt-5 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl dark:text-white"
          >
            Özet
          </h2>
          <div class="mt-4 font-extralight w-3/6">
            <p>{{ movieStore.detailInfo.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, watchEffect } from "vue";
import { usemovieDetailsStore } from "@/stores/movieDetails.js";
const movieStore = usemovieDetailsStore();
watchEffect(() => {
  movieStore.reqDetail();
});
</script>

<style scoped></style>
