import { type NextFunction, type Request, type Response } from 'express'
import { userService } from '../services/user.service'
import asyncHandler from 'express-async-handler'
import type IUser from '../interfaces/IUser'

export const userController = {
  create: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { status, message } = await userService.create(req.body as IUser)
    res.status(status).json(message)
  }),

  login: asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email, password } = req.body
    const { status, message } = await userService.login(email as string, password as string)
    res.status(status).json(message)
  }),
}
