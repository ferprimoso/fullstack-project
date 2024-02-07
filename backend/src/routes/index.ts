import { Router } from 'express'
import userRouter from './userRouter'
import artistRouter from './artistRouter'
import genreRouter from './genreRouter'

const router = Router()

router.use(userRouter)
router.use(artistRouter)
router.use(genreRouter)

// Health Check
router.get('/status', (req, res) => res.send('OK'))

export default router
