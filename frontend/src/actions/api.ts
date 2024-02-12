let apiKey: undefined | string

if (process.env.NODE_ENV === 'production') {
  apiKey = process.env.API_PRODUCTION
} else {
  apiKey = 'http://fullstack_project_backend_1:3001'
}

export default apiKey
