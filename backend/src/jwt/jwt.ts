import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { type NextFunction, type Request, type Response } from 'express'

interface RequestWithUser extends Request {
  user?: {
    userId: number
    username: string
    email: string
  }
}

const secret = process.env.JWT_SECRET as jwt.Secret

// Generate a token for the user
const sign = (payload: { userId: number; username: string; email: string }): string => {
  return jwt.sign(payload, secret, { expiresIn: '7d' })
}

// Verify if the token is valid
const verifyToken = (req: RequestWithUser, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers.authorization
    const token: string | undefined = authHeader?.split(' ')[1]

    if (token == null) {
      res.status(401).json({ msg: 'Access Unauthorized' })
      return
    }
    jwt.verify(token, secret, (err: any, user: any) => {
      if (err !== null) {
        res.status(403).json({ msg: 'Access Forbidden' })
        return
      }

      req.user = user
      next()
    })
  } catch (error) {
    next(error)
  }
}

export { sign, verifyToken }
