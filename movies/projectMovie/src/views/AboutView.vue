<template>
  <div class="HomePage">
    <div class="border-4 flex">
      <h1 class="mt-5">This is Home page</h1>
    </div>
    <div class="border-4">
    <div class="border-4">
      <ul class="flex flex-wrap justify-center">
        <li v-for="(movie, index) in dataMovie" :key="index" class="p-6">
          <div class="max-w-xs rounded overflow-hidden shadow-lg">
            <img class="w-full"
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              alt="movie poster"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
              <p class="text-gray-700 text-base">
                {{ movie.overview }}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >{{ movie.release_date }}
              </span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >{{ movie.original_language.toUpperCase() }}</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >{{ movie.popularity }}</span
              >
            </div>
          </div>
        </li>
      </ul>
      <button @click="getReq">getreq</button>
      <button @click="getRes">getresponse</button>
    </div>
  </div>
</div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const cosolelog = () => {
  console.log(dataMovie.value);
};
const getRes = () => {
  console.log(dataMovie.value);
};
const dataMovie = ref([]);
const getReq = () => {
  axios
    .request(options)
    .then(function (response) {
      dataMovie.value = response.data.results.slice(0, 10);
    })
    .catch(function (error) {
      const errorData = error;
      console.log(errorData);
      console.error(error);
    });
};

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
onMounted(() => {
  getReq();

  getRes();
});
</script>
<style></style>
