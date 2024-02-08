import supertest from 'supertest'
import db from '../database/models'
import app from '../app'

// Tests
describe('Track', () => {
  afterAll(async () => {
    await db.close()
  })

  describe('Get track by id - GET /tracks/:trackId', () => {
    it('Should return a single album object', async () => {
      // All the DB Data was seeded when the Db was created so we can assume theres a 10 trackId in the database
      const response = await supertest(app).get('/tracks/' + '10')
      expect(response.status).toBe(200)
      expect(response.body.trackId).toBe(10)
    })

    it('Should return a 404 if trackId doesnt exist', async () => {
      const response = await supertest(app).get('/tracks/' + 'fakeId')
      expect(response.status).toBe(404)
    })
  })

  describe('Get all tracks of an Album - GET /albums/:albumId/tracks', () => {
    it('Should return an array of tracks', async () => {
      // All the DB Data was seeded when the Db was created so we can assume theres a 10 albumId in the database
      const response = await supertest(app).get('/albums/10/tracks')
      expect(response.status).toBe(200)
      expect(response.body).not.toHaveLength(0)
    })

    it('Should return a 404 if albumId doesnt exist', async () => {
      const response = await supertest(app).get('/albums/fakeAlbumId/tracks')
      expect(response.status).toBe(404)
    })
  })
})
