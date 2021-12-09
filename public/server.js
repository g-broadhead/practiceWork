const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(_dirname, 'public')))

app.get('/home', (req, res) => {
  // res.sendFile(path.join(__dirname, 'index.html'))
  })

app.get('/music', (req, res) => {
  res.sendFile(path.join(__dirname, 'music.html'))
})
const bands = {
  band: 'Dragonforce',
  genre: 'Power Metal',
  album: 'Inhuman Rampage'
}
  
  

app.get('/movie', (req, res) => {
  res.sendFile(path.join(__dirname, 'movie.html'))
})
const movie = {
  title: 'Shrek',
  genre: 'Animated Masterpiece',
  rating: '11/10'
}
  


app.get('/musiclog', (req, res) => {
  res.json(bands)
})

app.get('/movielist', (req, res) => {
  res.json(movie)
})



app.listen(3000)

