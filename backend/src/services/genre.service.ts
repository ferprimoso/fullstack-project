import Genre from '../database/models/Genre'
import { resp } from '../util/resp'

export const genreService = {
  getAllGenres: async () => {
    const genres = await Genre.findAll()
    return resp(200, genres)
  },
}
