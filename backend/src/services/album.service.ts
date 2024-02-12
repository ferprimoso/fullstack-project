import { Op } from 'sequelize'
import Album from '../database/models/Album'
import { resp, respM } from '../util/resp'
import Artist from '../database/models/Artist'
import Genre from '../database/models/Genre'

export const albumService = {
  getAllAlbums: async () => {
    const albums = await Album.findAll({
      include: [
        { model: Artist, as: 'artist' },
        { model: Genre, as: 'genre' },
      ],
    })
    return resp(200, albums)
  },

  getAlbumsById: async (albumId: string | undefined) => {
    const album = await Album.findByPk(albumId)

    if (album === null) {
      return respM(404, 'Not found')
    }

    return resp(200, album)
  },

  searchAlbumsByName: async (name: any) => {
    const albums = await Album.findAll({
      where: {
        albumTitle: {
          [Op.like]: `%${name}%`,
        },
      },
      include: [
        { model: Artist, as: 'artist' },
        { model: Genre, as: 'genre' },
      ],
    })
    return resp(200, albums)
  },
}
