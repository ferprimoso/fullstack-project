let apiKey: undefined | string

if (process.env.NODE_ENV === 'production') {
  apiKey = process.env.API_PRODUCTION
} else {
  apiKey = process.env.NEXT_PUBLIC_NETWORK_API_URL
}

export default apiKey
