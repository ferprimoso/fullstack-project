import { Op } from 'sequelize'
import Artist from '../database/models/Artist'
import { resp, respM } from '../util/resp'

export const artistService = {
  getAllArtists: async () => {
    const artists = await Artist.findAll()
    return resp(200, artists)
  },

  getArtistById: async (artistId: string | undefined) => {
    const artist = await Artist.findByPk(artistId)

    if (artist === null) {
      return respM(404, 'Not found')
    }

    return resp(200, artist)
  },

  searchArtistsByName: async (name: any) => {
    const artists = await Artist.findAll({
      where: {
        artistName: {
          [Op.like]: `%${name}%`,
        },
      },
    })
    return resp(200, artists)
  },
}
