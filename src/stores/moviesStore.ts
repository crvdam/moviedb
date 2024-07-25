import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', () => {
  // Home view
  const movies = ref([]);

  // Infinite scroll
  const currentPage = ref(1);

  // Movie details view
  const movieDetails = ref();
  const movieCredits = ref();
  const movieVideos = ref();

  // Dynamic background gradient
  const backgroundColors = ref({
    color1: "rgb(0, 0, 0)",
    color2: "rgb(0, 0, 0)",
    color3: "rgb(0, 0, 0)",
    color4: "rgb(0, 0, 0)"
  })

  function filterDirectors() {
    return movieCredits.value.crew.filter((crewmember:any) => crewmember.job === 'Director');
  }

  function filterWriters() {
    return movieCredits.value.crew.filter((crewmember:any) => {
      return crewmember.job === 'Screenplay' || crewmember.job === 'Story' || crewmember.job === 'Writer';
    })
  }

  function filterTrailers() {
    return movieVideos.value.results.filter((video:any) => video.type === 'Trailer');
  }

  return { 
    movies, 
    currentPage,
    movieDetails,
    movieCredits,
    movieVideos,
    backgroundColors, 
    filterDirectors,
    filterWriters,
    filterTrailers,
  };
});
