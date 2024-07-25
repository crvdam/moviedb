<script setup lang="ts">
  import { useMoviesStore } from "@/stores/moviesStore";

  const store = useMoviesStore();

  function slide(direction:string, speed:number, distance:number, step:number) {
    if (document.getElementById('list-castmembers')) {
      var list = document.getElementById('list-castmembers')
    }

    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (direction === 'left') {
        list!.scrollLeft -= step;
      } else {
        list!.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed)
  }
  
</script>

<template>
  <div v-if="store.movieCredits" class="container-castmembers">
    <button
      @click="slide('right', 10, 600, 50)"
      class="slide right">
        >
    </button>
    <button 
      @click="slide('left', 10, 600, 50)" 
      class="slide left">
        &lt;
    </button>
    <ul id="list-castmembers">
      <li v-for="castmember in store.movieCredits.cast" :key="castmember.id">
        <div 
          :style="{ 'background-image': `url(https://image.tmdb.org/t/p/original${castmember.profile_path})`}"
          class="castmember-photo">
        </div>
        <div class="castmember-info">
          <p class="castmember-name">{{ castmember.name }}</p>
          <p class="character-name">{{ castmember.character }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .container-castmembers {
    position: relative;
    margin: 0 30px;
  }
  
  ul {
    overflow: scroll;
    display: flex;
    scrollbar-width: none;
    transition: 1s;
  }

  .slide {
    all: unset;
    user-select: none;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    font-size: 30px;
    padding: 10px;
  }

  .slide:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
    transition: 0.2s;
    cursor: pointer;
  }
  
  .left {
    left: -30px;
    top: 50px;
  }
  
  .right {
    right: -30px;
    top: 50px;
  }

  .castmember-photo {
    height: 150px;
    width: 100px;
    background-size: cover;
    margin-right: 10px;
    border-radius: 10px 10px 0 0;
  }

  .castmember-info {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100px;
    padding: 5px 0;
    text-align: center;
    border-radius: 0 0 10px 10px;
  }

  .character-name {
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
  }

  @media screen and (min-width: 600px) {
    .container-castmembers {
      margin: 0;
    }
    .castmember-photo {
      height: 300px;
      width: 200px;
      margin-right: 40px;
    }

    .castmember-info {
      width: 200px;
    }

    .slide {
      font-size: 50px;
      padding: 10px;
    }

      .left {
      left: -35px;
      top: 115px;
    }
    
    .right {
      right: -35px;
      top: 115px;
    }
  }
</style>