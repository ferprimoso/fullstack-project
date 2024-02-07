import { Router } from 'express'
import { artistController } from '../controllers/artist.controller'

const artistRouter = Router()

// Get all Artists
artistRouter.get('/artists', artistController.getAllArtists)

// Search artist by Name
artistRouter.get('/artists/search', artistController.searchArtistsByName)

// Get artist by Id
artistRouter.get('/artists/:artistId', artistController.getArtistById)

export default artistRouter
