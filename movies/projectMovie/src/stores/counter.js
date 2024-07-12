import { ref, onMounted, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
  const dataMovie = ref([]);
  const searchTerm = ref(""); // Arama terimi için doğru tip

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGQ5NTg2ZjVkNjhlOTEzYzlhYzgxOWVjMTMzNzA3YSIsIm5iZiI6MTcyMDYxMzI1My45OTkyNjIsInN1YiI6IjY2OGU2MTA3NmNhMDRlZDhkYTBkNDFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGrSrAuTuMNMrDeimQqxF7n9YXnx45eaOVKqiC1F3gg",
    },
  };

  const getReq = async () => {
    await axios
      .request(options)
      .then(function (response) {
        dataMovie.value = response.data.results.slice(0, 8);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const filteredMovie = computed(() => {
    return dataMovie.value.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });

  onMounted(() => {
    getReq();
  });

  return { dataMovie, searchTerm, filteredMovie, getReq };
});
