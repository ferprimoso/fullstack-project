import supertest from 'supertest'
import db from '../database/models'
import app from '../app'

// Tests
describe('Album', () => {
  afterAll(async () => {
    await db.close()
  })

  describe('Get all Albums - GET /albums', () => {
    it('Should return an array of albums', async () => {
      const response = await supertest(app).get('/albums')

      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body).not.toHaveLength(0)
    })
  })

  describe('Search albums by name - GET /albums/search', () => {
    it('Should return an array of albums', async () => {
      // All the DB Data was seeded when the Db was created so we can assume theres a Abbey Road album in the database
      const response = await supertest(app).get('/albums/search?name=' + 'abbey road')
      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body).not.toHaveLength(0)
    })

    it('Should return a empty array if no album has found', async () => {
      const response = await supertest(app).get('/albums/search?name=' + 'fake album')
      expect(response.status).toBe(200)
      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body).toHaveLength(0)
    })
  })

  describe('Get album by id - GET /albums/:albumId', () => {
    it('Should return an single album object', async () => {
      // All the DB Data was seeded when the Db was created so we can assume theres a 1 albumId in the database
      const response = await supertest(app).get('/albums/' + '1')
      expect(response.status).toBe(200)
      expect(response.body.artistId).toBe(1)
    })

    it('Should return a 404 if albumId doesnt exist', async () => {
      const response = await supertest(app).get('/albums/' + 'fakeId')
      expect(response.status).toBe(404)
    })
  })
})
