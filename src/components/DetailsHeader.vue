<script setup lang="ts">
  import { useMoviesStore } from "@/stores/moviesStore";

  const store = useMoviesStore();
</script>

<template>
    <div class="wrapper-title-rating">
      <h1>
        {{ store.movieDetails.title }}
      </h1>
      <div class="wrapper-rating">
        <img src="@/assets/icons/ic_vote.png">
        <p>{{ store.movieDetails.vote_average.toFixed(1) }}</p>
        <p>({{ store.movieDetails.vote_count }})</p>
      </div>
    </div>
    <h2>
      {{ store.movieDetails.tagline }}
    </h2>
    <h3>
      {{ store.movieDetails.release_date.slice(0, 4) }} · {{ store.movieDetails.runtime }} min
    </h3>
</template>

<style scoped lang="scss">

  .wrapper-rating {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .wrapper-title-rating {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    display: inline;
    font-size: 32px;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-size: 20px;
    font-weight: normal;
  }

  h3 {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5)
  }

  @media screen and (min-width: 600px) {
    h1 {
    font-size: 48px;
  }
    h2 {
      font-size: 32px;
    }
  }
</style>