import { Op } from 'sequelize'
import Track from '../database/models/Track'
import { resp } from '../util/resp'

export const trackService = {
  getTrackById: async (trackId: string | undefined) => {
    const track = await Track.findByPk(Number(trackId))
    return resp(200, track)
  },

  getAllTracksByAlbumId: async (albumId: string | undefined) => {
    const tracks = await Track.findAll({
      where: {
        albumId: {
          [Op.like]: Number(albumId),
        },
      },
    })
    return resp(200, tracks)
  },
}
