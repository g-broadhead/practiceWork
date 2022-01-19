const router = require('express').Router()
const { Songs } = require('../models')

// GET all songs
router.get('/songs', (req, res) => Songs.findAll()
  .then(songs => res.json(songs))
  .catch(err => console.log(err)))

// POST one songs
router.post('/songs', (req, res) => Songs.create(req.body)
  .then(songs => res.json(songs))
  .catch(err => console.log(err)))

// PUT one songs
router.put('/songs/:id', ({ params: { id }, body }, res) => Songs.update(body, { where: { id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

// DELETE one songs
router.delete('/songs/:id', ({ params: { id } }, res) => Songs.destroy({ where: { id } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err)))

module.exports = router
