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
import { onMounted, ref, watch, computed, reactive } from "vue";
import { useRoute } from "vue-router";
import { useCounterStore } from "@/stores/counter";

const route = useRoute();
const store = useCounterStore();
const localID = ref(route.params.id);
const detailInfo = ref([]);
const dateMovie = reactive({});

const loadDetail = () => {
  store.dataMovie.forEach((element) => {
    if (element.id == localID.value) {
      detailInfo.value = element;

      console.log(dateMovie.date);
    }
  });
};
const releaseYear = computed(() => {
  return detailInfo.value.release_date
    ? detailInfo.value.release_date.substring(0, 4)
    : "";
});
onMounted(() => {
  loadDetail();
  console.log(releaseYear);
});
</script>
<style scoped></style>
