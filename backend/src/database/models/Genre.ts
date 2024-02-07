import sequelize, { Model } from 'sequelize'
import db from '.'

class Genre extends Model {
  declare genreId: number
  declare genreName: string
}

Genre.init(
  {
    genreId: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    genreName: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'genre',
    timestamps: false,
    underscored: true,
  },
)

export default Genre
