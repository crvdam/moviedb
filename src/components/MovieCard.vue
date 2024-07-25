<script setup lang="ts">
  const { movie } = defineProps(['movie']);
</script>

<template>
  <RouterLink :to="`/movie/${movie.id}`">
    <div 
      v-show="movie.poster_path !== 'https://image.tmdb.org/t/p/w200null'"
      class="moviecard"
      :style="{ 'background-image': `url(https://image.tmdb.org/t/p/w200${movie.poster_path})`}">
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
  .moviecard {
    width: 150px;
    height: 225px;
    background-size: contain;
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
    margin: 5px;
  }

  @media screen and (min-width: 600px) {
    .moviecard {
      width: 200px;
      height: 300px;
      transition: 0.2s;
      cursor: pointer;
    }

    .moviecard:hover {
    transform: scale(1.1);
    box-shadow: 10px 10px 2px rgba(0, 0, 0, 0.5);
    transition: 0.4s;
    }
  }
</style>