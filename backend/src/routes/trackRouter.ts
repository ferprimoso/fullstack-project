import { Router } from 'express'
import { trackController } from '../controllers/track.controller'

const trackRouter = Router()

// Get track by Id
trackRouter.get('/tracks/:trackId', trackController.getTrackById)

// Get all tracks of an album
trackRouter.get('/albums/:albumId/tracks', trackController.getAllTracksByAlbumId)

export default trackRouter
