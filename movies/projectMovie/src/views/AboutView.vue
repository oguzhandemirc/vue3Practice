<template>
  <div class="HomePage">
    <div class="flex flex-col">
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-5 justify-center flex"
      >
        movie
        <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500"
          >list</mark
        >
      </h1>
      <p
        class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 flex justify-center"
      >
        don't waste your time
      </p>
    </div>

    <div class="px-10 pt-10">
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center"
      >
        <li
          v-for="(movie, index) in dataMovie"
          :key="index"
          class="mb-5 rounded overflow-hidden shadow-lg"
        >
          <img
            class="w-full"
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt="movie poster"
          />
          <div class="	">
            <div class="p-6">
              <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
              <p class="text-gray-700 text-base">
                {{ movie.overview }}
              </p>
              <br>
              <button @click="console.log(dataMovie)">
                <RouterLink to="/:">Home</RouterLink>

                Details</button>
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
                >{{ movie.id }}</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >{{ movie.popularity }}</span
              >
            </div>
          </div>
        </li>
      </ul>
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
      dataMovie.value = response.data.results.slice(0, 8);
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
