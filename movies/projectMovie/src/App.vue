<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderComp from "./components/HeaderComp.vue";
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <HeaderComp />
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
