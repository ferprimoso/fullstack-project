'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert seed data for albums
    await queryInterface.bulkInsert(
      'album',
      [
        {
          album_title: 'Abbey Road',
          release_year: 1969,
          album_cover_url: 'https://example.com/album1.jpg',
          artist_id: 1,
          genre_id: 1,
        },
        {
          album_title: 'Selling England by the Pound',
          release_year: 1973,
          album_cover_url: 'https://example.com/album2.jpg',
          artist_id: 2,
          genre_id: 1,
        },
        {
          album_title: '1989',
          release_year: 2014,
          album_cover_url: 'https://example.com/album2.jpg',
          artist_id: 3,
          genre_id: 2,
        },
        {
          album_title: 'Graduation',
          release_year: 2007,
          album_cover_url: 'https://example.com/album2.jpg',
          artist_id: 4,
          genre_id: 3,
        },
        {
          album_title: 'Dookie',
          release_year: 1994,
          album_cover_url: 'https://example.com/album2.jpg',
          artist_id: 5,
          genre_id: 4,
        },
        {
          album_title: 'Frank Ocean',
          release_year: 2016,
          album_cover_url: 'https://example.com/album2.jpg',
          artist_id: 6,
          genre_id: 5,
        },
        {
          album_title: 'Milton',
          release_year: 1970,
          album_cover_url: 'https://example.com/album2.jpg',
          artist_id: 7,
          genre_id: 6,
        },
        {
          album_title: 'Untrue',
          release_year: 2007,
          album_cover_url: 'https://example.com/album2.jpg',
          artist_id: 8,
          genre_id: 7,
        },
        {
          album_title: 'Blue',
          release_year: 1971,
          album_cover_url: 'https://example.com/album2.jpg',
          artist_id: 9,
          genre_id: 8,
        },
        {
          album_title: 'Face Value',
          release_year: 1981,
          album_cover_url: 'https://example.com/album2.jpg',
          artist_id: 10,
          genre_id: 2,
        },
        {
          album_title: 'Paranoid',
          release_year: 1970,
          album_cover_url: 'https://example.com/album2.jpg',
          artist_id: 11,
          genre_id: 9,
        },
        {
          album_title: 'Weezer',
          release_year: 1994,
          album_cover_url: 'https://example.com/album2.jpg',
          artist_id: 12,
          genre_id: 1,
        },
        {
          album_title: 'Pinkerton',
          release_year: 1996,
          album_cover_url: 'https://example.com/album2.jpg',
          artist_id: 12,
          genre_id: 1,
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('album', null, {})
  },
}
