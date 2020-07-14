const BASE_URL = '/api/movies';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

// export function getAllMovies() {
//   return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=bd687508`, {mode: 'cors'})
//       .then(res => res.json())
// }