let fetch = require('node-fetch')

module.exports = {
  index
};

async function index(req, res) {
  fetch(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=4be6ad4a89bc47bbad612f671c80e92c`)
  .then(response => response.json()) 
  .then(data => res.json(data) )
} 