
export function getAll() {

  return fetch('/api/newsApiRouter')
    .then(res => res.json())
}