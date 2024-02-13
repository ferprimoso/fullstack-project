let apiKey: undefined | string

if (process.env.NODE_ENV === 'production') {
  apiKey = process.env.API_PRODUCTION
}

export default apiKey
