const fs = require('fs')
const movies = require(`./movies.js`)
const songs = require(`./songs.js`)
const games = require(`./games.js`)


fs.writeFile('example.txt', `${movies}`, `${songs}`, `${games}`,  err => {
  if (err) { console.log(err) }
})