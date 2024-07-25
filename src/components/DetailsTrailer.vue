<script setup lang="ts">
  import { useMoviesStore } from '@/stores/moviesStore';
  
  const store = useMoviesStore();

</script>

<template>
  <div 
    v-if="store.movieVideos"
    class="container-movie-images">
    <iframe 
      v-for="trailer in store.filterTrailers().slice(0, 1)"
      :src="`https://www.youtube.com/embed/${trailer.key}`">
      </iframe> 
  </div>
</template>

<style scoped lang="scss">
  iframe {
    border: none;
    height: 300px;
  }

  @media screen and (min-width: 600px) {
    iframe {
      width: 600px;
      height: 450px;
    }
  }
</style>