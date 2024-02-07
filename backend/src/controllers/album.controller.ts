import { type NextFunction, type Request, type Response } from 'express'
import { albumService } from '../services/album.service'
import asyncHandler from 'express-async-handler'

export const albumController = {
  getAllAlbums: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { status, message } = await albumService.getAllAlbums()
    res.status(status).json(message)
  }),

  getAlbumsById: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { albumId } = req.params
    const { status, message } = await albumService.getAlbumsById(albumId)
    res.status(status).json(message)
  }),

  searchAlbumsByName: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.query
    const { status, message } = await albumService.searchAlbumsByName(name)
    res.status(status).json(message)
  }),
}
