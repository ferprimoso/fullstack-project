import { Op } from 'sequelize'
import Album from '../database/models/Album'
import Artist from '../database/models/Artist'
import Liked from '../database/models/Like'
import { resp, respM } from '../util/resp'

export const likedService = {
  createLike: async (userId: string | undefined, entityId: string | undefined, entityType: string | undefined) => {
    let existingLiked = null
    // TODO
    // REFACTOR TO BE MORE SHORT

    if (entityType === 'albums') {
      // See if album is already liked
      existingLiked = await Liked.findOne({
        where: {
          userId,
          albumId: entityId,
        },
      })
    } else if (entityType === 'artists') {
      // See if artist is already liked
      existingLiked = await Liked.findOne({
        where: {
          artistId: entityId,
        },
      })
    } else {
      return respM(400, 'Invalid entityType')
    }

    // If the user already has liked, remove the like
    if (existingLiked !== null) {
      await Liked.destroy({ where: { likeId: existingLiked.likedId } })
      return respM(200, 'Like removed sucessfully')
    }

    // If is not liked yet, create like
    if (entityType === 'albums') {
      const liked = await Liked.create({ userId, albumId: entityId, artistId: null })
      return resp(200, liked)
    } else if (entityType === 'artists') {
      const liked = await Liked.create({ userId, albumId: null, artistId: entityId })
      return resp(200, liked)
    } else {
      return respM(400, 'Invalid entityType')
    }
  },

  getAllAlbumsLiked: async (userId: string | undefined) => {
    const albumsLiked = await Liked.findAll({
      where: {
        userId,
        albumId: { [Op.not]: null },
      },
      include: [{ model: Album, as: 'album' }],
    })
    return resp(200, albumsLiked)
  },

  getAllArtistsLiked: async (userId: string | undefined) => {
    const artistsLiked = await Liked.findAll({
      where: {
        userId,
        artistId: { [Op.not]: null },
      },
      include: [{ model: Artist, as: 'artist' }],
    })
    return resp(200, artistsLiked)
  },
}
