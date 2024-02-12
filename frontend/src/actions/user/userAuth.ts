'use server'

import apiKey from '../api'

async function loginUser(credentials: { email: string; password: string }) {
  // Call login API endpoint
  const response = await fetch(apiKey + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })

  if (!response.ok) {
    throw new Error('Login failed')
  }

  const data = await response.json()
  return data
}

async function signupUser(credentials: {
  username: string
  email: string
  password: string
}) {
  // Call signup API endpoint
  const response = await fetch(apiKey + '/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })

  if (!response.ok) {
    throw new Error('Signup failed')
  }

  const data = await response.json()
  return data.token // Assuming your backend returns the JWT token
}

export { loginUser, signupUser }
