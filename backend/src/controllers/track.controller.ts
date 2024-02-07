import { type NextFunction, type Request, type Response } from 'express'
import { trackService } from '../services/track.service'
import asyncHandler from 'express-async-handler'

export const trackController = {
  getTrackById: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { trackId } = req.params
    const { status, message } = await trackService.getTrackById(trackId)
    res.status(status).json(message)
  }),

  getAllTracksByAlbumId: asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { albumId } = req.params
    const { status, message } = await trackService.getAllTracksByAlbumId(albumId)
    res.status(status).json(message)
  }),
}
