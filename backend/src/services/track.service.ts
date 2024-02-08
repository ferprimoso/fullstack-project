import { Op } from 'sequelize'
import Track from '../database/models/Track'
import { resp, respM } from '../util/resp'

export const trackService = {
  getTrackById: async (trackId: string | undefined) => {
    const track = await Track.findByPk(trackId)

    if (track === null) {
      return respM(404, 'Not found')
    }

    return resp(200, track)
  },

  getAllTracksByAlbumId: async (albumId: string | undefined) => {
    const tracks = await Track.findAll({
      where: {
        albumId: {
          [Op.like]: albumId,
        },
      },
    })

    if (tracks.length === 0) {
      return respM(404, 'No tracks found for the specified album ID')
    }

    return resp(200, tracks)
  },
}
