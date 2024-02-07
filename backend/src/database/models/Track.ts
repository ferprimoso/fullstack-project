import sequelize, { Model } from 'sequelize'
import db from '.'
import Album from './Album'

class Track extends Model {
  declare trackId: number
  declare trackTitle: string
  declare trackDuration: string
  declare albumId: number
}

Track.init(
  {
    trackId: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    trackTitle: {
      type: sequelize.STRING,
      allowNull: false,
    },
    trackDuration: {
      type: sequelize.TIME,
      allowNull: false,
    },
    albumId: {
      type: sequelize.INTEGER,
      references: {
        model: 'album',
        key: 'album_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize: db,
    tableName: 'track',
    timestamps: false,
    underscored: true,
  },
)

Track.belongsTo(Album, {
  foreignKey: 'albumId',
})

export default Track
