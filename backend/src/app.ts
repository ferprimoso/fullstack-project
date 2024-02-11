import express from 'express'
import cors from 'cors'
import compression from 'compression'
import router from './routes'
import helmet from 'helmet'
import logger from './util/logger'

// Create Express Server
const app = express()

// Express Configuration
app.set('port', process.env.PORT ?? 3001)
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
// app.use(cors())

// Routes
app.use(router)

// Error handler
app.use((req, res, next) => {
  const error = new Error('Not Found')
  logger.error(error)

  return res.status(404).json(error.message)
})

export default app
