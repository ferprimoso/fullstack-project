import { Router } from 'express'
import { userController } from '../controllers/user.controller'

const userRouter = Router()

// Register User
userRouter.post('/user', userController.create)

// Login user
userRouter.post('/login', userController.login)

export default userRouter
