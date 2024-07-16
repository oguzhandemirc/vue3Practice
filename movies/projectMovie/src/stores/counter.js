import { ref, onMounted, computed, watch } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
  const dataMovie = ref([]);
  const searchTerm = ref("");
  const pageCount = ref(1);
  const totalPages = ref(0);
  const totalMovie = ref(0);
  const range = ref(5);
  const numbers = ref([]);
  const maxPage = ref(500);

  const setPage = (page) => {
    pageCount.value = page;
    scrollToTop();
    updatePagination();
  };

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: pageCount.value },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGQ5NTg2ZjVkNjhlOTEzYzlhYzgxOWVjMTMzNzA3YSIsIm5iZiI6MTcyMDYxMzI1My45OTkyNjIsInN1YiI6IjY2OGU2MTA3NmNhMDRlZDhkYTBkNDFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGrSrAuTuMNMrDeimQqxF7n9YXnx45eaOVKqiC1F3gg",
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updatePagination = () => {
    const startPage = Math.max(pageCount.value - range.value, 1);  
    const endPage = Math.min(pageCount.value + range.value, totalPages.value);
    numbers.value = [];
    for (let i = startPage; i <= endPage; i++) {
      numbers.value.push(i);
    }
  };

  watch(pageCount, () => {
    options.params.page = pageCount.value;
    getReq();
  });

  const getReq = async () => {
    await axios
      .request(options)
      .then(function (response) {
        dataMovie.value = response.data.results;
        totalPages.value = response.data.total_pages;
        totalMovie.value = response.data.total_results;
        updatePagination();
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const nextPage = () => {
    if (pageCount.value < totalPages.value) {
      pageCount.value++;
      scrollToTop();
      updatePagination();
    }
  };

  const prevPage = () => {
    if (pageCount.value > 1) {
      pageCount.value--;
      scrollToTop();
      updatePagination();
    }
  };

  const filteredMovie = computed(() => {
    return dataMovie.value.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });

  const paginatedNumbers = computed(() => {
    return numbers.value.slice();
  });

  onMounted(() => {
    getReq();
  });

  return {
    maxPage,
    dataMovie,
    searchTerm,
    filteredMovie,
    getReq,
    totalPages,
    totalMovie,
    pageCount,
    nextPage,
    numbers,
    setPage,
    prevPage,
    paginatedNumbers,
  };
});
