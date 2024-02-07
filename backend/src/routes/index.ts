import { Router } from 'express'
import userRouter from './userRouter'
import artistRouter from './artistRouter'
import genreRouter from './genreRouter'
import albumRouter from './albumRouter'
import trackRouter from './trackRouter'
import likedRouter from './likedRouter'

const router = Router()

router.use(userRouter)
router.use(artistRouter)
router.use(genreRouter)
router.use(albumRouter)
router.use(trackRouter)
router.use(likedRouter)

// Health Check
router.get('/status', (req, res) => res.send('OK'))

export default router
