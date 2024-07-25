<script setup lang="ts">
  import { useMoviesStore } from '@/stores/moviesStore';
  import { watch } from 'vue';
  
  const store = useMoviesStore();
  
  watch(
    () => store.backgroundColors,  
    () => {
      // To achieve a smooth transition between gradients, show a transition div on top of background that fades out while background is changed.
      const background = document.getElementById('background');
      const backgroundTransition = document.getElementById('background-transition');

      backgroundTransition!.className = 'fade';

      background!.style.background = 
        `linear-gradient(140deg, 
        ${store.backgroundColors.color2} 0%,
        ${store.backgroundColors.color1} 40%,
        ${store.backgroundColors.color1} 60%,
        ${store.backgroundColors.color2} 100%)`;

      setTimeout(() => {
        backgroundTransition!.className = '';
        backgroundTransition!.style.opacity = '0';

        // Set transition div to new background colors
        backgroundTransition!.style.background = 
        `linear-gradient(140deg, 
        ${store.backgroundColors.color2} 0%,
        ${store.backgroundColors.color1} 50%,
        ${store.backgroundColors.color3} 100%)`

      }, 900);  
    });
  
</script>

<template>
  <div id="background"></div>
  <div id="background-transition"></div>
</template>

<style scoped lang="scss">
  #background, #background-transition {
    position: fixed;
    width: 100%;
    height: 100%;
  }

  #background  {
    z-index: -2;
  }

  #background2 {
    z-index: -2;
    opacity: 1;
    background-color: red;
  }

  #background-transition {
    z-index: -1;
    opacity: 0;
  }

  .fade {
    animation: fade 1s ease;
  }

  @keyframes fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

</style>