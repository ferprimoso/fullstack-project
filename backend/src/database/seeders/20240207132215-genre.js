'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert seed data for artists
    await queryInterface.bulkInsert(
      'genre',
      [
        { genre_name: 'Rock' },
        { genre_name: 'Pop' },
        { genre_name: 'Hip-Hop' },
        { genre_name: 'Punk Rock' },
        { genre_name: 'R&B' },
        { genre_name: 'MPB' },
        { genre_name: 'Eletronic' },
        { genre_name: 'Folk' },
        { genre_name: 'Metal' },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genre', null, {})
  },
}
