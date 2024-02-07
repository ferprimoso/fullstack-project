import { Router } from 'express'
import { trackController } from '../controllers/track.controller'

const trackRouter = Router()

// Get track by Id
trackRouter.get('/tracks/:trackId', trackController.getTrackById)

// Search artist by Name
trackRouter.get('/albums/:albumId/tracks', trackController.getAllTracksByAlbumId)

export default trackRouter
