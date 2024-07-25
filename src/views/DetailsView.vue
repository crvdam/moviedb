<script setup lang="ts">
  import { useMoviesStore } from '@/stores/moviesStore';
  import { useRoute } from 'vue-router';
  import { fetchMovieById, fetchMovieVideosById, fetchCreditsById } from '@/utils/api';
  import DetailsHeader from '@/components/DetailsHeader.vue';
  import DetailsPoster from '@/components/DetailsPoster.vue';
  import DetailsTrailer from '@/components/DetailsTrailer.vue';
  import DetailsCrew from '@/components/DetailsCrew.vue';
  import DetailsOverview from '@/components/DetailsOverview.vue';
  import DetailsGenres from '@/components/DetailsGenres.vue'; 
  import DetailsCast from '@/components/DetailsCast.vue';

  const store = useMoviesStore();
  const route = useRoute();
  
  fetchMovieById(String(route.params.movieId));
  fetchCreditsById(String(route.params.movieId));
  fetchMovieVideosById(String(route.params.movieId));

</script>

<template>
  <div 
    v-if="store.movieDetails"
    class="container-details">
      <div class="details-title-rating">
        <DetailsHeader />
      </div>
      <div class="details-poster-trailer">
        <DetailsPoster />
        <DetailsTrailer />
      </div>
      <div class="details-additional">
        <DetailsGenres /> 
        <DetailsOverview />
        <DetailsCrew />
        <DetailsCast />
      </div>
    </div>
</template>

<style scoped lang="scss">
  .container-details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
  }

  .details-poster-trailer {
    display: flex;
    justify-content: space-around;
  }

  @media screen and (min-width: 600px) {
    .container-details {
      padding: 10px 40px;
    }
    .details-poster-trailer {
     justify-content: flex-start;
     gap: 30px;

  }
  }
</style>