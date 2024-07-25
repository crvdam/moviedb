<script setup lang="ts">
  import { useMoviesStore } from "@/stores/moviesStore";

  const store = useMoviesStore();

  
</script>

<template>
  <div class="container-information">
    <p class="wrapper-overview">
      {{ store.movieDetails.overview }}
    </p>
  </div>
  
</template>

<style scoped lang="scss">
  .wrapper-overview {
    text-align: justify;
    margin-bottom: 20px;
  }
</style>