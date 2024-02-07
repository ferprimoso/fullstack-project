'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('album', {
      album_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      album_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      release_date: {
        type: Sequelize.DATEONLY,
      },
      artist_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'artist',
          key: 'artist_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      genre_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genre',
          key: 'genre_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      album_cover_url: {
        type: Sequelize.STRING,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('album')
  },
}
