<script setup lang="ts">
  import { determinePalette } from '@/utils/paletteExtraction';

  const { movie } = defineProps(["movie"])
</script>

<template>
  <RouterLink :to="`/movie/${movie.id}`">
    <div 
      class="container-hero-image"> 
        <Transition name="fade">
          <img 
          :key="movie.backdrop_path"
          :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
          @load="determinePalette(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`)"            
          id="hero-image">          
        </Transition>

          <div class="info-container">
            <h2 class="title">{{ movie.title }}</h2>
            <h3 class="vote">
              <img src="../assets/icons/ic_vote.png" alt="score">{{ movie.vote_average.toFixed(1) }}
            </h3>
            <p class="overview">{{ movie.overview }}</p>
          </div>
    </div>
  </RouterLink>
</template> 

<style scoped lang="scss">
  .container-hero-image{
    position: relative;
    overflow: hidden;
  }
  
  #hero-image {
    height: 500px;
    width: 100%;
    object-fit: cover;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }

  #hero-image:hover {
    transform: scale(1.05);
    transition: 1s ease;
  }

  .info-container {
    background-color: rgba(0, 0 , 0, 0.6);
    color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100%;
    padding: 0 10px 10px 10px;
    bottom: 50px;
  }

  .vote {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .vote > img {
    height: 30px;
  }
  .title {
    font-size: 32px;
  }
  .overview {
    font-size: 18px;
    text-align: justify;
  }

  @media screen and (min-width: 600px) {
    .info-container {
      padding-right: 50px;
    }

    .title {
      font-size: 60px;
    }
    .overview {
      font-size: 18px;
      width: 70%;
      text-align: justify;
    }
  }
</style>