import { type NextFunction, type Request, type Response } from 'express'
import { artistService } from '../services/artist.service'
import asyncHandler from 'express-async-handler'

export const artistController = {
  getAllArtists: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { status, message } = await artistService.getAllArtists()
    res.status(status).json(message)
  }),

  getArtistById: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { artistId } = req.params
    const { status, message } = await artistService.getArtistById(artistId)
    res.status(status).json(message)
  }),

  searchArtistsByName: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.query
    const { status, message } = await artistService.searchArtistsByName(name)
    res.status(status).json(message)
  }),
}
