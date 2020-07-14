const BASE_URL = '/api/movies';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}