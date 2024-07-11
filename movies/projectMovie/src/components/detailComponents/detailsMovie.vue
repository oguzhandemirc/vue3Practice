<template>
  <div class="about px-10 pt-10 bg-pink-100 pb-10 rounded-lg shadow-lg pl-40">
    <div class="flex items-center">
      <div>
        <img
          class="rounded-2xl shadow-2xl"
          :src="`https://image.tmdb.org/t/p/w500/${detailInfo.poster_path}`"
        />
      </div>
      <div class="ml-20">
        <h1
          class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          {{ detailInfo.title }}
          <span class="text-blue-600 dark:text-blue-500 relasedate"
            >( {{ releaseYear }} )</span
          >
        </h1>
        <p class="uppercase">
          {{ detailInfo.release_date }} - {{ detailInfo.original_language }}
        </p>
        <div
          class="mt-5 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl dark:text-white"
        >
          <h3>
            <span class="text-red-600 text-5xl">{{ detailInfo.vote_average }}</span>
            <span> Raiting </span>
          </h3>
        </div>
        <div class="flex">
          <h3 class="lg:text-2xl">
            <span class="text-blue-600 dark:text-blue-500 lg:text-3xl font-extrabold">{{
              detailInfo.vote_count
            }}</span>
            Kişi Tarafından Oylandı
          </h3>
        </div>
        <div class="flex text-3xl font-extrabold">
          <p>
            {{ detailInfo.popularity }}
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
            <p>{{ detailInfo.overview }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const localID = ref(route.params.id);
const detailInfo = ref({});

const loadDetail = async () => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGQ5NTg2ZjVkNjhlOTEzYzlhYzgxOWVjMTMzNzA3YSIsIm5iZiI6MTcyMDYxMzI1My45OTkyNjIsInN1YiI6IjY2OGU2MTA3NmNhMDRlZDhkYTBkNDFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGrSrAuTuMNMrDeimQqxF7n9YXnx45eaOVKqiC1F3gg",
      },
    };
    const response = await axios.request(options);
    const movie = response.data.results.find((element) => element.id == localID.value);
    if (movie) {
      detailInfo.value = movie;
    }
  } catch (error) {
    console.error(error);
  }
};

// Yıl bilgisini hesapla
const releaseYear = computed(() => {
  return detailInfo.value.release_date
    ? detailInfo.value.release_date.substring(0, 4)
    : "";
});

// Bileşen yüklendiğinde veriyi çek
onMounted(() => {
  loadDetail();
});
</script>

<style scoped></style>
