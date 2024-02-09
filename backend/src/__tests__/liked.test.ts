import supertest from 'supertest'
import db from '../database/models'
import app from '../app'
import User from '../database/models/User'

// User payload
const userPayload = {
  username: 'john',
  email: 'john@test.com',
  password: 'test123',
}

let token: string

// Tests
describe('Liked', () => {
  // It will be created a mock user to get the JWT TOKEN and Userid
  beforeAll(async () => {
    // Create a Mock User
    await supertest(app).post('/user').send(userPayload)
    const response = await supertest(app).post('/login').send(userPayload)
    token = response.body.token
  })

  // after all tests is done, the Mock user and the their likes will be deleted
  afterAll(async () => {
    await User.destroy({
      where: {
        username: userPayload.username,
      },
    })
    await db.close()
  })

  it('Should return a 401 given no JWT token', async () => {
    const response = await supertest(app).post('/likes/artists/1')
    expect(response.status).toBe(401)
  })
  it('Should return a 403 given if the JWT token is invalid', async () => {
    const response = await supertest(app).post('/likes/artists/1').set('Authorization', `Bearer ${'invalidToken'}`)
    expect(response.status).toBe(403)
  })

  describe('Like an Album or Artist - POST /likes/:entityType/:entityId', () => {
    it('Should create a liked entry given the artist entityType and artistId', async () => {
      // All the DB Data was seeded when the Db was created so we can assume theres a 1 artistId in the database
      const response = await supertest(app).post('/likes/artists/1').set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(200)
      expect(response.body.artistId).toBe('1')
    })

    it('Should create a liked entry given the album entityType and albumId', async () => {
      // All the DB Data was seeded when the Db was created so we can assume theres a 2 albumId in the database
      const response = await supertest(app).post('/likes/albums/2').set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(200)
    })

    it('Should delete a liked entry if is already Liked - artists', async () => {
      const response = await supertest(app).post('/likes/artists/1').set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(200)
    })

    it('Should delete a liked entry if is already Liked - albums', async () => {
      const response = await supertest(app).post('/likes/albums/2').set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(200)
    })

    it('Should return a 400 if entityType is not artists or albums', async () => {
      // All the DB Data was seeded when the Db was created so we can assume theres a 2 albumId in the database
      const response = await supertest(app).post('/likes/something/2').set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(400)
    })

    it('Should return a 404 if entityId is not found', async () => {
      const response = await supertest(app).post('/likes/albums/invalidId').set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(404)
    })
  })

  describe('Get all Albums Liked - GET /likes/albums', () => {
    it('Should return a list of all albums Liked', async () => {
      // All the DB Data was seeded when the Db was created so we can assume theres a 4 albumId in the database
      await supertest(app).post('/likes/albums/4').set('Authorization', `Bearer ${token}`)
      const response = await supertest(app).get('/likes/albums').set('Authorization', `Bearer ${token}`)

      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body).not.toHaveLength(0)
    })

    describe('Get all Artists Liked - GET /likes/artists', () => {
      it('Should return a list of all artists Liked', async () => {
        // All the DB Data was seeded when the Db was created so we can assume theres a 4 artistId in the database
        await supertest(app).post('/likes/artists/4').set('Authorization', `Bearer ${token}`)
        const response = await supertest(app).get('/likes/artists').set('Authorization', `Bearer ${token}`)

        expect(response.status).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body).not.toHaveLength(0)
      })
    })
  })
})
