import { useMoviesStore } from "@/stores/moviesStore";

var API_KEY = ''

export async function fetchPopularMovies() {
  const store = useMoviesStore();
  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${store.currentPage}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: API_KEY
    }
  };

  fetch(url, options)
  .then(res => res.json())
  .then(json => {
      store.movies = store.movies.concat(json.results);
      console.log(store.movies)
  })
  .catch(err => console.error('error:' + err));
};

export async function searchMovie(query:string) {
  const store = useMoviesStore();
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${store.currentPage}`;
  const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: API_KEY
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      store.movies = store.movies.concat(json.results)
    })
    .catch(err => console.error('error:' + err));
};
  
export async function fetchMovieById(id: string) {
  const store = useMoviesStore();
  store.movieDetails = '';
  
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: API_KEY
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => store.movieDetails = json)
    .catch(err => console.error('error:' + err));
}

export async function fetchCreditsById(id: string) {
  const store = useMoviesStore();
  store.movieCredits = ''

  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: API_KEY
    }
  };

fetch(url, options)
  .then(res => res.json())
  .then(json => store.movieCredits = json)
  .catch(err => console.error('error:' + err));
}

export async function fetchMovieVideosById(id: string) {
  const store = useMoviesStore();
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: API_KEY
    }
  };

fetch(url, options)
  .then(res => res.json())
  .then(json => {store.movieVideos = json; console.log(json)})
  .catch(err => console.error('error:' + err));

}