import { defineStore } from "pinia";
import { ref, onMounted, computed, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export const usemovieDetailsStore = defineStore("movieDetails", () => {
  const route = useRoute();
  const detailInfo = ref({});
  const localID = ref(route.params.id);
  const reqDetail = async () => {
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
      detailInfo.value = movie;

    } catch (error) {
        console.error(error);
    }
  };

  const releaseYear = computed(() => {
  return detailInfo.value.release_date
    ? detailInfo.value.release_date.substring(0, 4)
    : "";
});

watch(
    () => route.params.id,
    (newId) => {
      localID.value = newId;
    }
  );


  return {reqDetail, detailInfo,localID,releaseYear};
});
