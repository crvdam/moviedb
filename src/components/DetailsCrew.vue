  <script setup lang="ts">
    import { useMoviesStore } from "@/stores/moviesStore";
  
    const store = useMoviesStore();
  </script>
  
  <template>
    <div 
      v-if="store.movieCredits"
      class="container-crew">
      <div class="wrapper">
        Directed by:
        <ul>
          <li v-for="director in store.filterDirectors()" :key="director.id">
            {{ director.name }}
          </li>
        </ul>
      </div>
      <div class="wrapper">
        Written by:
        <ul>
          <li v-for="writer in store.filterWriters()" :key="writer.id">
            {{ writer.name }}
          </li>
        </ul>
      </div> 
    </div>
  </template>
  
  <style scoped lang="scss">
    .container-crew {
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
    }
    
    ul {
      margin-bottom: 10px;
      display: flex;
    }
    
    li {
      font-weight: bold;
      padding-left: 20px;
    }

  </style>