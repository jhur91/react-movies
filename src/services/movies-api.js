// const BASE_URL = '/api/movies';

// export function getAll() {
//   return fetch(BASE_URL)
//   .then(res => res.json());
// }

export function getAll() {
  return fetch(`https://api.themoviedb.org/3/movie/550?api_key=d124d5a08d510bb0207532915027189c`, {mode: 'cors'})
      .then(res => res.json())
}


// export function getAll() {
//   return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=d124d5a08d510bb0207532915027189c&language=en-US&page=1`, {mode: 'cors'})
//       .then(res => res.json())
// }