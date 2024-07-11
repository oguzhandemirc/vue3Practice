<template>
  <div class="about">
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      {{ detailInfo.title }}
      <!-- {{ detailInfo.original_language }}
      {{ detailInfo.overview }}
      {{ detailInfo.popularity }}
      {{ detailInfo.poster_path }}
      {{ detailInfo.release_date }}
      {{ detailInfo.vote_count }}
      {{ detailInfo.vote_average }} -->
      <span class="text-blue-600 dark:text-blue-500"
        >( {{ detailInfo.release_date }} )</span
      >
    </h1>
    <img :src="`https://image.tmdb.org/t/p/w500/${detailInfo.poster_path}`" />
    <h3>Film Puanı</h3>
    <p>{{ detailInfo.vote_average }}</p>
    <h3>Oylayan Kişi Sayısı</h3>
    <p>{{ detailInfo.vote_count }}</p>
    <h3>Özet</h3>
    <p>{{ detailInfo.overview }}</p>
    <h3>Popülerlik</h3>
    <p>{{ detailInfo.popularity }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useCounterStore } from "@/stores/counter";

const route = useRoute();
const store = useCounterStore();
const localID = ref(route.params.id);
const detailInfo = ref([]);

const loadDetail = () => {
  store.dataMovie.forEach((element) => {
    if (element.id == localID.value) {
      console.log(true);
      detailInfo.value = element;

      console.log(detailInfo.value.release_date); // console.log(detailTitle.value);
    }
  });
};

onMounted(() => {
  loadDetail();
  console.log(store.dataMovie);
});

// watch(
//   () => route.params.id,
//   async () => {
//     loadDetail();
//   }
// );
</script>

<style></style>
