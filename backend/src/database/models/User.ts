import sequelize, { Model } from 'sequelize'

import db from '.'

class User extends Model {
  declare userId: number
  declare username: string
  declare email: string
  declare password: string
}

User.init(
  {
    userId: {
      allowNull: false,
      type: sequelize.UUID,
      defaultValue: sequelize.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'user',
    timestamps: false,
    underscored: true,
  },
)

export default User
