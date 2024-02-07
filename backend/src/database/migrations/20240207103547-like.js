'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    'use strict'
    await queryInterface.createTable('liked', {
      liked_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'user',
          key: 'user_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      album_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'album',
          key: 'album_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      artist_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'artist',
          key: 'artist_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('liked')
  },
}
