import supertest from 'supertest'
import db from '../database/models'
import app from '../app'

// Configuration

// Tests
describe('Artist', () => {
  afterAll(async () => {
    await db.close()
  })

  describe('Get all artists - GET /artists', () => {
    it('Should return an array of artists', async () => {
      const response = await supertest(app).get('/artists')

      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body).not.toHaveLength(0)
    })
  })

  describe('Search artists by name - GET /artists/search', () => {
    it('Should return an array of artists', async () => {
      // All the DB Data was seeded when the Db was created so we can assume theres a weezer artist in the database
      const response = await supertest(app).get('/artists/search?name=' + 'weezer')
      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body).not.toHaveLength(0)
    })

    it('Should return a empty array if no artist has found', async () => {
      const response = await supertest(app).get('/artists/search?name=' + 'fake artist')
      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body).toHaveLength(0)
    })
  })

  describe('Get artist by id - GET /artists/:artistId', () => {
    it('Should return an single artist object', async () => {
      // All the DB Data was seeded when the Db was created so we can assume theres a 12 artistId in the database
      const response = await supertest(app).get('/artists/' + '12')
      expect(response.status).toBe(200)
      expect(response.body.artistId).toBe(12)
    })
    it('Should return a 404 if the Id dont exists', async () => {
      const response = await supertest(app).get('/artists/' + 'fakeId')
      expect(response.status).toBe(404)
    })
  })
})
