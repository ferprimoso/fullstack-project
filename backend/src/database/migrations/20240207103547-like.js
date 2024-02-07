'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    'use strict'

    module.exports = {
      up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('like', {
          like_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          user_id: {
            type: Sequelize.INTEGER,
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
          track_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
              model: 'track',
              key: 'track_id',
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
        await queryInterface.dropTable('like')
      },
    }
  },
}
