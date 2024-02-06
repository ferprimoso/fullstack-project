import express from 'express'
import cors from 'cors'
import compression from 'compression'
import logger from './util/logger'
// import router from './router'
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
// app.use('/api', router)

app.use('/', (req, res) => res.send('HIHIHIH'))

// Error handler
app.use((req, res, next) => {
  const error = new Error(' not found')
  logger.error(error)

  return res.status(404).json({ message: error.message })
})

export default app
