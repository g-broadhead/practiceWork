const express = require('express')
const path = require('path')

const app = express()

app.get('/home', (req, res) => {
  // res.sendFile(path.join(__dirname, 'index.html'))
  })

app.get('/music', (req, res) => {
  // res.sendFile(path.join(__dirname, 'music.html'))
  res.json(music)
})
const music = {
  band: 'Dragonforce',
  genre: 'Power Metal',
  album: 'Inhuman Rampage'
}
  
  

app.get('/movie', (req, res) => {
  // res.sendFile(path.join(__dirname, 'movie.html'))
  res.json(movie)
})
const movie = {
  title: 'Shrek',
  genre: 'Animated Masterpiece',
  rating: '11/10'
}
  






app.listen(3000)

