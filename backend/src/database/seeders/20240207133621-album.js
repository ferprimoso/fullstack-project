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
          album_cover_url: 'https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25',
          artist_id: 1,
          genre_id: 1,
        },
        {
          album_title: 'Selling England by the Pound',
          release_year: 1973,
          album_cover_url: 'https://i.scdn.co/image/ab67616d0000b273769a32367e8bb631560572fd',
          artist_id: 2,
          genre_id: 1,
        },
        {
          album_title: '1989',
          release_year: 2014,
          album_cover_url: 'https://i.scdn.co/image/ab67616d0000b27352b2a3824413eefe9e33817a',
          artist_id: 3,
          genre_id: 2,
        },
        {
          album_title: 'Graduation',
          release_year: 2007,
          album_cover_url: 'https://i.scdn.co/image/ab67616d0000b27326f7f19c7f0381e56156c94a',
          artist_id: 4,
          genre_id: 3,
        },
        {
          album_title: 'Dookie',
          release_year: 1994,
          album_cover_url: 'https://i.scdn.co/image/ab67616d0000b273db89b08034de626ebee6823d',
          artist_id: 5,
          genre_id: 4,
        },
        {
          album_title: 'Blonde',
          release_year: 2016,
          album_cover_url: 'https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526',
          artist_id: 6,
          genre_id: 5,
        },
        {
          album_title: 'Milton',
          release_year: 1976,
          album_cover_url: 'https://i.scdn.co/image/ab67616d0000b2734536274f7f2eee8097dacd2d',
          artist_id: 7,
          genre_id: 6,
        },
        {
          album_title: 'Untrue',
          release_year: 2007,
          album_cover_url: 'https://i.scdn.co/image/ab67616d0000b27355018696782c175bdbaa3b5d',
          artist_id: 8,
          genre_id: 7,
        },
        {
          album_title: 'Blue',
          release_year: 1971,
          album_cover_url:
            'https://e.snmc.io/i/600/w/5a3b4bf31a32b5e22f4d2aa1be8debe5/11673836/joni-mitchell-blue-Cover-Art.jpg',
          artist_id: 9,
          genre_id: 8,
        },
        {
          album_title: 'Face Value',
          release_year: 1981,
          album_cover_url: 'https://i.scdn.co/image/ab67616d0000b273f7cf0c23d20f1ad9763dac19',
          artist_id: 10,
          genre_id: 2,
        },
        {
          album_title: 'Paranoid',
          release_year: 1970,
          album_cover_url: 'https://i.scdn.co/image/ab67616d0000b2739f0a9474c47a841c6f03e990',
          artist_id: 11,
          genre_id: 9,
        },
        {
          album_title: 'Weezer',
          release_year: 1994,
          album_cover_url: 'https://i.scdn.co/image/ab67616d0000b273345536847e60f622ee0eae96',
          artist_id: 12,
          genre_id: 1,
        },
        {
          album_title: 'Pinkerton',
          release_year: 1996,
          album_cover_url: 'https://i.scdn.co/image/ab67616d0000b273f4f9accdc0fb8ddee29e32b7',
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
