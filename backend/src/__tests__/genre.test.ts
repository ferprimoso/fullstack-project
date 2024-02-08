import supertest from 'supertest'
import db from '../database/models'
import app from '../app'

// Configuration

// Tests
describe('Genre', () => {
  afterAll(async () => {
    await db.close()
  })

  describe('Get all genres - GET /genres', () => {
    it('Should return an array of genres', async () => {
      const response = await supertest(app).get('/genres')

      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body).not.toHaveLength(0)
    })
  })
})
