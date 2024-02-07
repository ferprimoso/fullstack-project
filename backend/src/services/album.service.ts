import { Op } from 'sequelize'
import Album from '../database/models/Album'
import { resp } from '../util/resp'
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
    const album = await Album.findByPk(Number(albumId))
    return resp(200, album)
  },

  searchAlbumsByName: async (name: any) => {
    const albums = await Album.findAll({
      where: {
        albumTitle: {
          [Op.like]: `%${name}%`,
        },
      },
    })
    return resp(200, albums)
  },
}
