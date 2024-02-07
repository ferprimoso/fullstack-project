import { Router } from 'express'
import { userController } from '../controllers/user.controller'

const userRouter = Router()

userRouter.post('/signup', userController.sign)
userRouter.post('/login', userController.login)

export default userRouter
