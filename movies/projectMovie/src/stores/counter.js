import { ref, computed, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
export const useCounterStore = defineStore("counter", () => {
  const dataMovie = ref([]);
  const test = ref("test");
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
  });

  return { dataMovie, getReq, options,test };
});
