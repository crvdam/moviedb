<template>
  <nav>
    <RouterLink activeClass="active" to="/">Home</RouterLink>
    <RouterLink activeClass="active" to="/about">About</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    margin: 1rem 0;
  }

  a {
    margin: 0 1rem;
    color: #ffffffc0;
  }
  
  .active {
    font-weight: bolder;
    color: #fff;
  }
</style>