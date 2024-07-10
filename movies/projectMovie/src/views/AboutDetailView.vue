<template>
  <div class="about">
    <h1>This is an about detail {{ route.params.id }} page</h1>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
console.log(route.params.id);


</script>
<style></style>
