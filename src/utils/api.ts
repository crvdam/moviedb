import { useMoviesStore } from "@/stores/moviesStore";

const API_BASE = '/.netlify/functions/fetch-movies';

export async function fetchPopularMovies() {
  const store = useMoviesStore();
  
  try {
    const res = await fetch(`${API_BASE}?endpoint=movie/popular&page=${store.currentPage}`);
    const json = await res.json();
    store.movies = store.movies.concat(json.results);
    console.log(store.movies);
  } catch (err) {
    console.error('error:' + err);
  }
}

export async function searchMovie(query: string) {
  const store = useMoviesStore();
  
  try {
    const res = await fetch(`${API_BASE}?endpoint=search/movie&query=${encodeURIComponent(query)}&page=${store.currentPage}`);
    const json = await res.json();
    store.movies = store.movies.concat(json.results);
  } catch (err) {
    console.error('error:' + err);
  }
}

export async function fetchMovieById(id: string) {
  const store = useMoviesStore();
  store.movieDetails = '';
  
  try {
    const res = await fetch(`${API_BASE}?endpoint=movie/${id}`);
    const json = await res.json();
    store.movieDetails = json;
  } catch (err) {
    console.error('error:' + err);
  }
}

export async function fetchCreditsById(id: string) {
  const store = useMoviesStore();
  store.movieCredits = '';
  
  try {
    const res = await fetch(`${API_BASE}?endpoint=movie/${id}/credits`);
    const json = await res.json();
    store.movieCredits = json;
  } catch (err) {
    console.error('error:' + err);
  }
}

export async function fetchMovieVideosById(id: string) {
  const store = useMoviesStore();
  
  try {
    const res = await fetch(`${API_BASE}?endpoint=movie/${id}/videos`);
    const json = await res.json();
    store.movieVideos = json;
    console.log(json);
  } catch (err) {
    console.error('error:' + err);
  }
}