let apiKey: undefined | string

if (process.env.NODE_ENV === 'production') {
  apiKey = process.env.API_PRODUCTION
} else {
  apiKey = 'http://pc-backend:3001'
}

export default apiKey
