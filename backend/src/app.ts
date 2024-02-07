import express, { type NextFunction, type Request, type Response } from 'express'
import cors from 'cors'
import compression from 'compression'
// import logger from './util/logger'
import router from './routes'
import helmet from 'helmet'

// Create Express Server
const app = express()

// Express Configuration
app.set('port', process.env.PORT ?? 3001)
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors())

// Routes
app.use(router)

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: err.message })
})

export default app
