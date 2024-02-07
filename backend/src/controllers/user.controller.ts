import { type NextFunction, type Request, type Response } from 'express'
import { userService } from '../services/user.service'
import asyncHandler from 'express-async-handler'
import type IUser from '../interfaces/IUser'

export const userController = {
  login: asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email, password } = req.body
    const token = await userService.login(email as string, password as string)
    if (token === null) {
      res.status(400).json('Error')
      return
    }
    res.status(200).json(token)
  }),

  create: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const user = await userService.create(req.body as IUser)
    res.status(200).json(user)
  }),
}
