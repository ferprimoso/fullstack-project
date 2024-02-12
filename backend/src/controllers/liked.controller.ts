import { type NextFunction, type Request, type Response } from 'express'
import { likedService } from '../services/liked.service'
import asyncHandler from 'express-async-handler'

interface RequestWithUser extends Request {
  user?: {
    userId: number
    username: string
    email: string
  }
}

export const likedController = {
  createLiked: asyncHandler(async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const { entityId, entityType } = req.params
    const userId = req.user?.userId

    const { status, message } = await likedService.createLike(userId?.toString(), entityId, entityType)
    res.status(status).json(message)
  }),

  getAllAlbumsLiked: asyncHandler(async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userId = req.user?.userId

    const { status, message } = await likedService.getAllAlbumsLiked(userId?.toString())
    res.status(status).json(message)
  }),

  getAllArtistsLiked: asyncHandler(async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const userId = req.user?.userId

    const { status, message } = await likedService.getAllArtistsLiked(userId?.toString())
    res.status(status).json(message)
  }),
}
