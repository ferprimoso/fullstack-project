import { Op } from 'sequelize'
import Artist from '../database/models/Artist'
import { resp } from '../util/resp'

export const artistService = {
  getAllArtists: async () => {
    const artists = await Artist.findAll()
    return resp(200, artists)
  },

  getArtistById: async (artistId: string | undefined) => {
    const artist = await Artist.findByPk(Number(artistId))
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
