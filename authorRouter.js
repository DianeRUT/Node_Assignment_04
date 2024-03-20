import { Router } from 'express'

export const authorRoute = Router()

authorRoute.get('/', (req, res) => {
  res.send('GET all authors')
})

authorRoute.post('/', (req, res) => {
  res.send('POST a new author')
})

authorRoute.put('/:id', (req, res) => {
  res.send(`Update the author with ID ${req.params.id}`)
})

authorRoute.patch('/:id', (req, res) => {
  res.send(`Partially update the author with the ID ${req.params.id}`)
})

authorRoute.delete('/:id', (req, res) => {
  res.send(`Delete author with ID ${req.params / id}`)
})
