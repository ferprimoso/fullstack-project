'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert seed data for artists
    await queryInterface.bulkInsert(
      'artist',
      [
        {
          artist_name: 'The Beatles',
          artist_cover_url: 'https://i.scdn.co/image/ab6761610000e5ebe9348cc01ff5d55971b22433',
        },
        {
          artist_name: 'Genesis',
          artist_cover_url: 'https://i.scdn.co/image/ab6761610000e5ebdfb2b3c69199bc2dfbf3e5b9',
        },
        {
          artist_name: 'Taylor Swift',
          artist_cover_url: 'https://i.scdn.co/image/ab6761610000e5eb859e4c14fa59296c8649e0e4',
        },
        {
          artist_name: 'Kanye West',
          artist_cover_url: 'https://i.scdn.co/image/ab6761610000e5eb867008a971fae0f4d913f63a',
        },
        {
          artist_name: 'Green Day',
          artist_cover_url: 'https://i.scdn.co/image/ab6761610000e5eb6ff0cd5ef2ecf733804984bb',
        },
        {
          artist_name: 'Blonde',
          artist_cover_url: 'https://i.scdn.co/image/ab6761610000e5ebee3123e593174208f9754fab',
        },
        {
          artist_name: 'Milton Nascimento',
          artist_cover_url: 'https://i.scdn.co/image/ab6761610000e5eb8ed529f569634a2c98232412',
        },
        { artist_name: 'Burial', artist_cover_url: 'https://i.scdn.co/image/ab6761610000e5eb4be7334b7aed9ca32a732aeb' },
        {
          artist_name: 'Joni Mitchell',
          artist_cover_url: 'https://i.scdn.co/image/68cfb061951dbd44c95422a54cb70baec0722ca3',
        },
        {
          artist_name: 'Phil Collins',
          artist_cover_url: 'https://i.scdn.co/image/ab6761610000e5ebd4e38c4e3e5c82774740e28d',
        },
        {
          artist_name: 'Black Sabbath',
          artist_cover_url: 'https://i.scdn.co/image/ab6761610000e5eb4870cd833ebe1092601820c3',
        },
        { artist_name: 'Weezer', artist_cover_url: 'https://i.scdn.co/image/ab6761610000e5ebcff30a7278638dfd7e2726a9' },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('artist', null, {})
  },
}
