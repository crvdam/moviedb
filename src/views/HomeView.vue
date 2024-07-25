<script setup lang="ts">
  import MovieCard from '@/components/MovieCard.vue';
  import HeroImage from '@/components/HeroImage.vue';
  import ButtonScrollTop from '@/components/ButtonScrollTop.vue';
  import { useMoviesStore } from '@/stores/moviesStore';
  import { fetchPopularMovies } from '@/utils/api'
  import { ref, onMounted } from 'vue';

  const store = useMoviesStore();
  const showButton = ref(false);

  onMounted(() => {
    store.movies = [];
    store.currentPage = 1;
    fetchPopularMovies();
  })

  window.onscroll = () => {
    let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
    
    // Infinite scroll
    if (bottomOfWindow) {
      store.currentPage += 1;
      fetchPopularMovies();
    }

    // Display scroll to top button
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      showButton.value = true;
    } else {
      showButton.value = false;
    }
  }
</script>

<template>
  <main v-if="store.movies">
    <div class="spacer"></div>
    <div 
      v-if="store.movies[0]"
      class="hero-image">
        <HeroImage
          :movie="store.movies[0]"/>
    </div>

  <div 
    v-if="store.movies[1]"
    class="movie-card-container">
      <TransitionGroup name="fade">
        <MovieCard
          v-for="(movie, index) in store.movies.slice(1,)"
          :key="index"
          :movie="movie" />
      </TransitionGroup>
    </div>
    <ButtonScrollTop v-show="showButton"/>
  </main>
</template>

<style scoped lang="scss">
.movie-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 15px;
  }

.fade-enter-active {
  animation: appear 1s;
}

@keyframes appear {
  0% {
    opacity: 0;
  } 100% {
    opacity: 1;
  }
}

</style>