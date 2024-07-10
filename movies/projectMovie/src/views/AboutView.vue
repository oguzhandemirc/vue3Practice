<template>
  <div class="about">
    <h1>This is an about page</h1>
    <li v-for="(movie, index) in dataMovie" :key="index">{{ movie.title }}
      {{ movie.overview }}
      
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="movie poster" />

    </li>

    <button @click="getReq">getreq</button>
    <button @click="getRes">getresponse</button>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const getRes = () => {
  console.log(dataMovie.value);
};
const dataMovie = ref([]);
const getReq = () => {
  axios
    .request(options)
    .then(function (response) {
      dataMovie.value = response.data.results;
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
});
</script>
<style></style>
