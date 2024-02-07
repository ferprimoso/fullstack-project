import { Router } from 'express'
import userRouter from './userRouter'

const router = Router()

router.use(userRouter)

// Health Check
router.get('/status', (req, res) => res.send('OK'))

export default router
