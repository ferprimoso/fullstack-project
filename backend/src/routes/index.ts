import { Router } from 'express'
import userRouter from './userRouter'
import artistRouter from './artistRouter'

const router = Router()

router.use(userRouter)
router.use(artistRouter)

// Health Check
router.get('/status', (req, res) => res.send('OK'))

export default router
