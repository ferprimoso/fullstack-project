import { Router } from 'express'
import { genreController } from '../controllers/genre.controller'

const genreRouter = Router()

// Get all Genres
genreRouter.get('/genres', genreController.getAllGenres)

export default genreRouter
