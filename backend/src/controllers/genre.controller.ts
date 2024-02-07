import { type NextFunction, type Request, type Response } from 'express'
import { genreService } from '../services/genre.service'
import asyncHandler from 'express-async-handler'

export const genreController = {
  getAllGenres: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { status, message } = await genreService.getAllGenres()
    res.status(status).json(message)
  }),
}
