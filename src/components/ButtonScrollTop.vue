<script setup lang="ts">
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

</script>

<template>
  <button @click="scrollToTop()">^</button>
</template>

<style scoped lang="scss">
  button {
    all: unset;
    user-select: none; 
    position: fixed;
    width: 80px;
    height: 40px;
    bottom: 20px;
    left: 50%;
    margin-left: -45px;
    background-color: rgba(0, 0, 0, 0.8);
    font-size: 30px;
    font-weight: bolder;
    padding: 10px;
    text-align: center;
    animation: appear 0.5s ease;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    } 100% {
      opacity: 1;
    }
  }

  button:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
    transition: 0.2s;
    cursor: pointer;
  }
</style>