import User from '../database/models/User'
import bcrypt from 'bcryptjs'
import { sign } from '../jwt/jwt'
import type IUser from '../interfaces/IUser'

export const userService = {
  create: async (user: IUser): Promise<User> => {
    const hashedPassword = await bcrypt.hash(user.password, 10)
    return await User.create({ ...user, password: hashedPassword })
  },

  login: async (email: string, password: string) => {
    const user = await User.findOne({
      where: {
        email,
      },
    })

    // If user dont exists return null
    if (user == null) {
      return null
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    // If password dont match return null
    if (!passwordMatch) {
      return null
    }

    const { userId, username } = user

    const token = sign({ userId, username, email })

    return { userId, username, token }
  },
}
