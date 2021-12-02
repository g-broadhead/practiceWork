const movies = require(`./movies.js`)
const songs = require(`./songs.js`)
const games = require(`./games.js`)

const display = arr => {
  arr.forEach(elem => console.log(elem))
};

display(movies)
display(songs)
display(games)