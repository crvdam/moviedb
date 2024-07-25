<script setup lang="ts">
  import { useMoviesStore } from "@/stores/moviesStore";

  const store = useMoviesStore();

</script>

<template>
  <ul class="wrapper-genres">
    <li 
      v-for="genre in store.movieDetails.genres" 
      class="genre">
        {{ genre.name }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .wrapper-genres {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  li {
    color: rgba(255, 255, 255, 0.5);
    display: block;
    border: 3px solid rgba(255, 255, 255, 0.5);
    padding: 5px 20px;
    border-radius: 20px;
  }

</style>