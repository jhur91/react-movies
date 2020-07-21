
export function getAll() {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=4be6ad4a89bc47bbad612f671c80e92c`, {mode: 'cors'})
      .then(res => res.json())
}