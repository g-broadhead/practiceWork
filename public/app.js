console.log('ping')

axios.get('/music')
  .then(res => {
    const music = res.data

    document.getElementById('band').innerHTML = `
      <h1>${music.band}</h1>
      <h2>${music.genre}</h2>
      <h3>${music.album}</h3>
    `
  })
axios.get('/movie')
  .then(res => {
    const movie = res.data

    document.getElementById('title').innerHTML = `
      <h1>${movie.title}</h1>
      <h2>${movie.genre}</h2>
      <h3>${movie.rating}</h3>
    `
  })
  .catch(err => console.error(err))
