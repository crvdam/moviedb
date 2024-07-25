<script setup lang="ts">
  import Navbar from './Navbar.vue';
  import Search from './Search.vue';
  import { useRoute } from 'vue-router';
  import { watch } from 'vue';

  const route = useRoute();

</script>

<template>
  <header>
    <RouterLink activeClass="active" to="/">
      <div class="logo">CCDB</div>
    </RouterLink>
    <Navbar />
    <Transition name="fade" mode="out-in">
      <Search v-if="route.name === 'home'"/>
    </Transition>
  </header>
</template>

<style scoped lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
  
  header {
    position: fixed;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    width: 100vw;
    margin: auto;
    height: 100px;
    padding: 10px;
    z-index: 1;
  }

  .logo {
    display: flex;
    align-items: center;
    color: black;
    background-color: white;
    font-family: "Abril Fatface", serif;
    font-size: 40px;
    font-weight: bolder;
    height: 75px;
    border: 5px solid black;
    border-radius: 35px;
    padding: 5px 10px;
  }

  @media screen and (min-width: 600px) {
    header {
      max-width: 1400px;
      padding: 10px 30px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: 500ms ease all;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>