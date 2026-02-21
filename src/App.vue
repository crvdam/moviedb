<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { useMoviesStore } from '@/stores/moviesStore';
  import Header from './components/Header.vue';
  import Background from './components/Background.vue';

  const store = useMoviesStore();

</script>

<template>
  <Background />
  <div class="container-app">
    <Header />
    <div class="spacer"></div>
    <RouterView v-slot="{ Component }">
      <Transition name="route-transition" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>    
  </div>
</template>

<style scoped lang="scss">
  .container-app {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    
    background-color: rgba(0, 0, 0, 0.1);
    transform-origin: left;
  }
  
  .spacer {
    height: 151px;
  }
  
  .route-transition-enter-active,
  .route-transition-leave-active {
    transition: 500ms ease all;
  }
  
  .route-transition-enter-from,
  .route-transition-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  @media screen and (min-width: 600px) {
    .container-app {
      max-width: 1400px;
    }

    .spacer {
    height: 100px;
  }
  }
</style>
