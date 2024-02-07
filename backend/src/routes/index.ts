import { Router } from 'express'
import userRouter from './userRouter'
import artistRouter from './artistRouter'
import genreRouter from './genreRouter'
import albumRouter from './albumRouter'

const router = Router()

router.use(userRouter)
router.use(artistRouter)
router.use(genreRouter)
router.use(albumRouter)

// Health Check
router.get('/status', (req, res) => res.send('OK'))

export default router
