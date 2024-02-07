import sequelize, { Model } from 'sequelize'
import db from '.'
import Album from './Album'
import Track from './Track'
import Artist from './Artist'

class Like extends Model {
  declare likeId: number
  declare userId: number
  declare albumId: number
  declare trackId: number
  declare artistId: number
}

Like.init(
  {
    likeId: {
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
    trackId: {
      type: sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'track',
        key: 'track_id',
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
    tableName: 'like',
    timestamps: false,
    underscored: true,
  },
)

Like.belongsTo(Album, {
  foreignKey: 'albumId',
})
Like.belongsTo(Track, {
  foreignKey: 'trackId',
})
Like.belongsTo(Artist, {
  foreignKey: 'artistId',
})

export default Like
