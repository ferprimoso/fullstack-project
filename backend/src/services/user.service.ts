import User from '../database/models/User'
import bcrypt from 'bcryptjs'
import { sign } from '../jwt/jwt'
import type IUser from '../interfaces/IUser'
import schema from './validations/schema'
import { resp, respM } from '../util/resp'

export const userService = {
  create: async (user: IUser) => {
    const { error } = schema.user.validate(user)

    if (error !== undefined) {
      return respM(422, error.message)
    }

    const hashedPassword = await bcrypt.hash(user.password, 10)
    const createdUser = await User.create({ ...user, password: hashedPassword })

    return resp(201, createdUser)
  },

  login: async (email: string, password: string) => {
    const user = await User.findOne({
      where: {
        email,
      },
    })

    if (user == null) {
      return respM(404, 'User not found')
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return respM(401, 'Invalid username or password')
    }

    const { userId, username } = user
    const token = sign({ userId, username, email })

    return resp(200, { userId, username, token })
  },
}
