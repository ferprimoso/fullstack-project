import { Router } from 'express'
import { albumController } from '../controllers/album.controller'

const albumRouter = Router()

// Get all Albums
albumRouter.get('/albums', albumController.getAllAlbums)

// Search artist by Name
albumRouter.get('/albums/search', albumController.searchAlbumsByName)

// Get artist by Id
albumRouter.get('/albums/:albumId', albumController.getAlbumsById)

export default albumRouter
