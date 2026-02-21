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
    <div class="input-wrapper">
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
  input {
    border-radius: 15px;
    height: 40px;
    width: 100%;
    padding: 0 40px;
  }
  
  .input-wrapper {
    position: relative;
    width: 300px;
    margin: auto;
    display: flex;
    align-items: center;
  }
  .search-icon, .clear-icon {
    position: absolute;
    height: 30px;
    cursor: pointer;
  }

  .search-icon {
    left: 5px;

  }

  .clear-icon {
    right: 5px;
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
  
  @media screen and (min-width: 600px) {
    .input-wrapper {
      margin-left: auto;
      margin-right: unset;
    }
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