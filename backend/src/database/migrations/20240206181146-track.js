'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('track', {
      track_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      track_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      track_duration: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      album_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'album',
          key: 'album_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('track')
  },
}
