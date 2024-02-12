import supertest from 'supertest'
import db from '../database/models'
import app from '../app'
import User from '../database/models/User'

// USER TEST
// It will be created a user to test the signup
// then use the same user created to do the logins tests
// after all tests is done, the user is deleted

// User payload
const userPayload = {
  username: 'john',
  email: 'john@test.com',
  password: 'test123',
}

// Tests
describe('User', () => {
  afterAll(async () => {
    await User.destroy({
      where: {
        username: userPayload.username,
      },
    })
    await db.close()
  })

  describe('Register User - POST /user', () => {
    it('Should fail to create a user with missing signup data', async () => {
      const response = await supertest(app).post('/signup')
      expect(response.status).toBe(422)
    })

    it('Should create a sucessefully create a user if the signup data is valid', async () => {
      const response = await supertest(app).post('/signup').send(userPayload)

      expect(response.status).toBe(201)
      expect(response.body.username).toBe('john')
    })
  })

  describe('User Login - POST /login', () => {
    it('Should return a 400 if email or password fields are empty', async () => {
      const response = await supertest(app).post('/login')

      expect(response.status).toBe(400)
    })
    it('Should return a 404 if email doesnt exist', async () => {
      const response = await supertest(app).post('/login').send({
        email: 'fakeemail@test.com',
        password: 'fakepassword',
      })
      expect(response.status).toBe(404)
    })
    it('Should return a 401 if password is invalid', async () => {
      const response = await supertest(app).post('/login').send({
        email: userPayload.email,
        password: 'invalid_pass',
      })
      expect(response.status).toBe(401)
    })
    it('Should return a 200 and acessstoken if valid user and password ', async () => {
      const response = await supertest(app).post('/login').send(userPayload)

      expect(response.status).toBe(200)
      expect(response.body.token).toBeDefined()
      expect(response.body.username).toBe(userPayload.username)
    })
  })
})
