import { Router } from 'express'
import { userController } from '../controllers/user.controller'

const userRouter = Router()

userRouter.post('/user', userController.create)
userRouter.post('/login', userController.login)

export default userRouter
