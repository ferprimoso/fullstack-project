'use server' // This make the request being made in serverside not in client

async function loginUser(credentials: { email: string; password: string }) {
  // Call your login API endpoint
  const response = await fetch(
    'http://fullstack_project_backend_1:3001/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    },
  )

  if (!response.ok) {
    throw new Error('Login failed')
  }

  const data = await response.json()
  return data
}

async function signupUser(credentials: { email: string; password: string }) {
  // Call your signup API endpoint
  const response = await fetch(
    'http://fullstack_project_backend_1:3001/signup',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    },
  )

  if (!response.ok) {
    throw new Error('Signup failed')
  }

  const data = await response.json()
  return data.token // Assuming your backend returns the JWT token
}

export { loginUser, signupUser }
