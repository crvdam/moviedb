<template>
  <nav>
    <RouterLink activeClass="active" to="/">Home</RouterLink>
    <RouterLink activeClass="active" to="/about">About</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
  nav {
    align-content: center;
  }

  a {
    margin-left: 25px;
    color: #ffffffc0;
  }
  
  .active {
    font-weight: bolder;
    color: #fff;
  }
</style>