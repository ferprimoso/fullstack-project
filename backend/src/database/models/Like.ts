import sequelize, { Model } from 'sequelize'
import db from '.'
import Album from './Album'
import Artist from './Artist'

class Liked extends Model {
  declare likedId: number
  declare userId: number
  declare albumId: number
  declare artistId: number
}

Liked.init(
  {
    likedId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: sequelize.INTEGER,
    },
    userId: {
      type: sequelize.UUID,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    albumId: {
      type: sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'album',
        key: 'album_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    artistId: {
      type: sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'artist',
        key: 'artist_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize: db,
    tableName: 'liked',
    timestamps: false,
    underscored: true,
  },
)

Liked.belongsTo(Album, {
  foreignKey: 'albumId',
  as: 'album',
})
Liked.belongsTo(Artist, {
  foreignKey: 'artistId',
  as: 'artist',
})

export default Liked
