import sequelize, { Model } from 'sequelize'
import db from '.'
import Artist from './Artist'
import Genre from './Genre'

class Album extends Model {
  declare albumId: number
  declare albumTitle: string
  declare releaseYear: Date
  declare albumCoverUrl: string
  declare artistId: number
  declare genreId: number
}

Album.init(
  {
    albumId: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    albumTitle: {
      type: sequelize.STRING,
      allowNull: false,
    },
    releaseYear: {
      type: sequelize.INTEGER,
    },
    artistId: {
      type: sequelize.INTEGER,
      references: {
        model: 'artist',
        key: 'artist_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    genreId: {
      type: sequelize.INTEGER,
      references: {
        model: 'genre',
        key: 'genre_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    albumCoverUrl: {
      type: sequelize.STRING,
    },
  },
  {
    sequelize: db,
    tableName: 'album',
    timestamps: false,
    underscored: true,
  },
)

Album.belongsTo(Artist, {
  foreignKey: 'artistId',
  as: 'artist',
})

Album.belongsTo(Genre, {
  foreignKey: 'genreId',
  as: 'genre',
})

export default Album
