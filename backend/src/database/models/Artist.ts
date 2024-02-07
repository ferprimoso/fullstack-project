import sequelize, { Model } from 'sequelize'
import db from '.'

class Artist extends Model {
  declare artistId: number
  declare artistName: string
  declare bio: string
  declare artistCoverUrl: string
}

Artist.init(
  {
    artistId: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    artistName: {
      type: sequelize.STRING,
      allowNull: false,
    },
    bio: {
      type: sequelize.TEXT,
    },
    artistCoverUrl: {
      type: sequelize.STRING,
    },
  },
  {
    sequelize: db,
    tableName: 'artist',
    timestamps: false,
    underscored: true,
  },
)

export default Artist
