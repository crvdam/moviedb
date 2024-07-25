<script setup lang="ts">
  import { useMoviesStore } from '@/stores/moviesStore';
  import { determinePalette } from '@/utils/paletteExtraction';
  
  const store = useMoviesStore();

</script>

<template>
  <img
    :src="`https://image.tmdb.org/t/p/w400${store.movieDetails.poster_path}`"
    @load="determinePalette(`https://image.tmdb.org/t/p/w400${store.movieDetails.poster_path}`)"
    class="poster-image">
</template>

<style scoped lang="scss">
 .poster-image { 
    width: 200px;
    height: 300px;
 }

 @media screen and (min-width: 600px) {
  
 .poster-image { 
    width: 300px;
    height: 450px;
 }
 }
</style>