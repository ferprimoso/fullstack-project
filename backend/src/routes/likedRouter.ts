import { Router } from 'express'
import { likedController } from '../controllers/liked.controller'
import { verifyToken } from '../jwt/jwt'

const likedRouter = Router()

// Like a Album/Artist
likedRouter.post('/likes/:entityType/:entityId', verifyToken, likedController.createLiked)

// Get all albums liked
likedRouter.get('/likes/albums', verifyToken, likedController.getAllAlbumsLiked)

// Get all artists liked
likedRouter.get('/likes/artists', verifyToken, likedController.getAllArtistsLiked)

export default likedRouter
