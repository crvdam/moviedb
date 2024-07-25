<template>
  <div class="about-container">
    <p class="about-text">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
    <img src="../assets/icons/tmdb_logo.svg">
  </div>
</template>

<style scoped lang="scss">
  .about-container {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 50px;
  }

  .about-text {
    color: white;
    text-align: justify;
  }

  img {
    height: 70px;
    margin-top: 30px;
    margin-left: 30px;
  }
</style>