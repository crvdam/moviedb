<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useMoviesStore } from '@/stores/moviesStore';
  import { fetchPopularMovies, searchMovie } from '@/utils/api';
  
  const store = useMoviesStore();
  const query = ref("");

  let debounceTimeout: ReturnType<typeof setTimeout>;

  watch(query, () => {
    clearTimeout(debounceTimeout);
    
    debounceTimeout = setTimeout(() => {
      if (!query.value) {
        store.movies = [];
        store.currentPage = 1;
        fetchPopularMovies();
      } else {
        store.movies = [];
        store.currentPage = 1;
        searchMovie(query.value);
      }  
    }, 1000);
  })
</script>

<template> 
  <div class="search-wrapper">
    <img
      class="search-icon" 
      src="../assets/icons/ic_search.png" alt="">
    <input
      v-model="query"
      type="text" 
      placeholder="Search movie">
    <img 
      v-if="query"
      @click="query = ''" 
      class="clear-icon"
      src="../assets/icons/ic_clear.png" alt="">
  </div>
</template>

<style scoped lang="scss">
  .search-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  input {
    width: 250px;
    height: 40px;
    padding: 10px;
    padding-left: 45px;
    border-radius: 15px;
  }

  .search-icon, .clear-icon {
    position: absolute;
    height: 30px;
    cursor: pointer;
  }

  .search-icon {
    left: 10px;
  }

  .clear-icon {
    right: 10px;
    animation: fade-in 1s;
  }

  .clear-icon:hover {
    filter: invert(35%);
    transform: scale(1.1);
    transition: 0.1s ease;
  }

  .clear-icon:active {
    transform: scale(0.9);
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>