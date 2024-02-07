'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'track',
      [
        // Abbey Road
        {
          track_title: 'Come Together',
          track_duration: '00:04:19',
          album_id: 1,
        },
        {
          track_title: 'Something',
          track_duration: '00:03:02',
          album_id: 1,
        },
        {
          track_title: "Maxwell's Silver Hammer",
          track_duration: '00:03:27',
          album_id: 1,
        },
        {
          track_title: 'Oh! Darling',
          track_duration: '00:04:15',
          album_id: 1,
        },
        {
          track_title: "Octopus's Garden",
          track_duration: '00:02:50',
          album_id: 1,
        },
        {
          track_title: "I Want You (She's So Heavy)",
          track_duration: '00:07:47',
          album_id: 1,
        },
        {
          track_title: 'Here Comes The Sun',
          track_duration: '00:03:05',
          album_id: 1,
        },
        {
          track_title: 'Because',
          track_duration: '00:02:45',
          album_id: 1,
        },
        {
          track_title: 'You Never Give Me Your Money',
          track_duration: '00:04:02',
          album_id: 1,
        },
        {
          track_title: 'Sun King',
          track_duration: '00:02:26',
          album_id: 1,
        },
        {
          track_title: 'Mean Mr Mustard',
          track_duration: '00:01:06',
          album_id: 1,
        },
        {
          track_title: 'Polythene Pam',
          track_duration: '00:01:12',
          album_id: 1,
        },
        {
          track_title: 'She Came In Through The Bathroom Window',
          track_duration: '00:01:58',
          album_id: 1,
        },
        {
          track_title: 'Golden Slumbers',
          track_duration: '00:01:31',
          album_id: 1,
        },
        {
          track_title: 'Carry That Weight',
          track_duration: '00:01:36',
          album_id: 1,
        },
        {
          track_title: 'The End',
          track_duration: '00:02:21',
          album_id: 1,
        },
        {
          track_title: 'Her Majesty',
          track_duration: '00:00:25',
          album_id: 1,
        },
        // Selling England
        {
          album_id: 2,
          track_duration: '00:08:04',
          track_title: 'Dancing With the Moonlit Knight',
        },
        {
          album_id: 2,
          track_duration: '00:04:07',
          track_title: 'I Know What I Like (In Your Wardrobe)',
        },
        {
          album_id: 2,
          track_duration: '00:09:37',
          track_title: 'Firth of Fifth',
        },
        {
          album_id: 2,
          track_duration: '00:03:11',
          track_title: 'More Fool Me',
        },
        {
          album_id: 2,
          track_duration: '00:11:48',
          track_title: 'The Battle of Epping Forest',
        },
        {
          album_id: 2,
          track_duration: '00:04:16',
          track_title: 'After the Ordeal',
        },
        {
          album_id: 2,
          track_duration: '00:11:05',
          track_title: 'The Cinema Show',
        },
        {
          album_id: 2,
          track_duration: '00:01:32',
          track_title: 'Aisle of Plenty',
        },
        // 1989
        {
          album_id: 3,
          track_duration: '00:03:32',
          track_title: 'Welcome to New York',
        },
        {
          album_id: 3,
          track_duration: '00:03:51',
          track_title: 'Blank Space',
        },
        {
          album_id: 3,
          track_duration: '00:03:50',
          track_title: 'Style',
        },
        {
          album_id: 3,
          track_duration: '00:03:55',
          track_title: 'Out of the Woods',
        },
        {
          album_id: 3,
          track_duration: '00:03:13',
          track_title: 'All You Had to Do Was Stay',
        },
        {
          album_id: 3,
          track_duration: '00:03:39',
          track_title: 'Shake It Off',
        },
        {
          album_id: 3,
          track_duration: '00:03:27',
          track_title: 'I Wish You Would',
        },
        {
          album_id: 3,
          track_duration: '00:03:31',
          track_title: 'Bad Blood',
        },
        {
          album_id: 3,
          track_duration: '00:03:40',
          track_title: 'Wildest Dreams',
        },
        {
          album_id: 3,
          track_duration: '00:04:07',
          track_title: 'How You Get the Girl',
        },
        {
          album_id: 3,
          track_duration: '00:04:10',
          track_title: 'This Love',
        },
        {
          album_id: 3,
          track_duration: '00:03:15',
          track_title: 'I Know Places',
        },
        {
          album_id: 3,
          track_duration: '00:04:30',
          track_title: 'Clean',
        },
        // Graduation
        {
          album_id: 4,
          track_duration: '00:03:15',
          track_title: 'Good Morning',
        },
        {
          album_id: 4,
          track_duration: '00:02:48',
          track_title: 'Champion',
        },
        {
          album_id: 4,
          track_duration: '00:05:12',
          track_title: 'Stronger',
        },
        {
          album_id: 4,
          track_duration: '00:04:03',
          track_title: 'I Wonder',
        },
        {
          album_id: 4,
          track_duration: '00:03:27',
          track_title: 'Good Life',
        },
        {
          album_id: 4,
          track_duration: '00:04:32',
          track_title: "Can't Tell Me Nothing",
        },
        {
          album_id: 4,
          track_duration: '00:03:24',
          track_title: 'Barry Bonds',
        },
        {
          album_id: 4,
          track_duration: '00:05:13',
          track_title: 'Drunk and Hot Girls',
        },
        {
          album_id: 4,
          track_duration: '00:03:58',
          track_title: 'Flashing Lights',
        },
        {
          album_id: 4,
          track_duration: '00:03:48',
          track_title: 'Everything I Am',
        },
        {
          album_id: 4,
          track_duration: '00:03:33',
          track_title: 'The Glory',
        },
        {
          album_id: 4,
          track_duration: '00:03:24',
          track_title: 'Homecoming',
        },
        {
          album_id: 4,
          track_duration: '00:04:47',
          track_title: 'Big Brother',
        },
        // Dookie
        {
          album_id: 5,
          track_duration: '00:02:07',
          track_title: 'Burnout',
        },
        {
          album_id: 5,
          track_duration: '00:02:44',
          track_title: 'Having a Blast',
        },
        {
          album_id: 5,
          track_duration: '00:02:54',
          track_title: 'Chump',
        },
        {
          album_id: 5,
          track_duration: '00:03:59',
          track_title: 'Longview',
        },
        {
          album_id: 5,
          track_duration: '00:03:44',
          track_title: 'Welcome to Paradise',
        },
        {
          album_id: 5,
          track_duration: '00:02:31',
          track_title: 'Pulling Teeth',
        },
        {
          album_id: 5,
          track_duration: '00:03:03',
          track_title: 'Basket Case',
        },
        {
          album_id: 5,
          track_duration: '00:02:14',
          track_title: 'She',
        },
        {
          album_id: 5,
          track_duration: '00:02:37',
          track_title: 'Sassafras Roots',
        },
        {
          album_id: 5,
          track_duration: '00:02:58',
          track_title: 'When I Come Around',
        },
        {
          album_id: 5,
          track_duration: '00:01:35',
          track_title: 'Coming Clean',
        },
        {
          album_id: 5,
          track_duration: '00:01:44',
          track_title: 'Emenius Sleepus',
        },
        {
          album_id: 5,
          track_duration: '00:01:46',
          track_title: 'In the End',
        },
        {
          album_id: 5,
          track_duration: '00:02:50',
          track_title: 'F.O.D',
        },
        {
          album_id: 5,
          track_duration: '00:01:40',
          track_title: 'All by Myself',
        },
        // Blonde
        {
          album_id: 6,
          track_duration: '00:05:14',
          track_title: 'Nikes',
        },
        {
          album_id: 6,
          track_duration: '00:04:09',
          track_title: 'Ivy',
        },
        {
          album_id: 6,
          track_duration: '00:03:04',
          track_title: 'Pink + White',
        },
        {
          album_id: 6,
          track_duration: '00:01:26',
          track_title: 'Be Yourself',
        },
        {
          album_id: 6,
          track_duration: '00:04:17',
          track_title: 'Solo',
        },
        {
          album_id: 6,
          track_duration: '00:03:04',
          track_title: 'Skyline To',
        },
        {
          album_id: 6,
          track_duration: '00:04:09',
          track_title: 'Self Control',
        },
        {
          album_id: 6,
          track_duration: '00:01:06',
          track_title: 'Good Guy',
        },
        {
          album_id: 6,
          track_duration: '00:05:07',
          track_title: 'Nights',
        },
        {
          album_id: 6,
          track_duration: '00:01:18',
          track_title: 'Solo (Reprise)',
        },
        {
          album_id: 6,
          track_duration: '00:02:38',
          track_title: 'Pretty Sweet',
        },
        {
          album_id: 6,
          track_duration: '00:01:08',
          track_title: 'Facebook Story',
        },
        {
          album_id: 6,
          track_duration: '00:01:25',
          track_title: 'Close to You',
        },
        {
          album_id: 6,
          track_duration: '00:04:08',
          track_title: 'White Ferrari',
        },
        {
          album_id: 6,
          track_duration: '00:05:34',
          track_title: 'Seigfried',
        },
        {
          album_id: 6,
          track_duration: '00:02:57',
          track_title: 'Godspeed',
        },
        {
          album_id: 6,
          track_duration: '00:09:24',
          track_title: 'Futura Free',
        },
        // Milton
        {
          album_id: 7,
          track_duration: '00:03:35',
          track_title: 'Raça (Hasa) (Race)',
        },
        {
          album_id: 7,
          track_duration: '00:04:11',
          track_title: 'Fairy Tale Song (Cadê)',
        },
        {
          album_id: 7,
          track_duration: '00:04:27',
          track_title: 'Francisco',
        },
        {
          album_id: 7,
          track_duration: '00:03:53',
          track_title: 'Nothing Will Be as It Was (Nada será como antes)',
        },
        {
          album_id: 7,
          track_duration: '00:03:44',
          track_title: 'Cravo e canela (Clove and Cinnamon)',
        },
        {
          album_id: 7,
          track_duration: '00:05:49',
          track_title: 'The Call (Chamada)',
        },
        {
          album_id: 7,
          track_duration: '00:04:30',
          track_title: 'One Coin (Tostão)',
        },
        {
          album_id: 7,
          track_duration: '00:04:45',
          track_title: 'Saídas e bandeiras (Exits and Flags)',
        },
        {
          album_id: 7,
          track_duration: '00:08:06',
          track_title: 'Os povos (The People)',
        },
        // Untrue
        {
          album_id: 8,
          track_duration: '00:00:46',
          track_title: 'Untitled',
        },
        {
          album_id: 8,
          track_duration: '00:03:58',
          track_title: 'Archangel',
        },
        {
          album_id: 8,
          track_duration: '00:03:54',
          track_title: 'Near Dark',
        },
        {
          album_id: 8,
          track_duration: '00:04:53',
          track_title: 'Ghost Hardware',
        },
        {
          album_id: 8,
          track_duration: '00:02:57',
          track_title: 'Endorphin',
        },
        {
          album_id: 8,
          track_duration: '00:05:59',
          track_title: 'Etched Headplate',
        },
        {
          album_id: 8,
          track_duration: '00:02:07',
          track_title: 'In McDonalds',
        },
        {
          album_id: 8,
          track_duration: '00:06:16',
          track_title: 'Untrue',
        },
        {
          album_id: 8,
          track_duration: '00:04:40',
          track_title: 'Shell of Light',
        },
        {
          album_id: 8,
          track_duration: '00:02:59',
          track_title: 'Dog Shelter',
        },
        {
          album_id: 8,
          track_duration: '00:05:20',
          track_title: 'Homeless',
        },
        {
          album_id: 8,
          track_duration: '00:01:40',
          track_title: 'UK',
        },
        {
          album_id: 8,
          track_duration: '00:04:59',
          track_title: 'Raver',
        },
        // Blue
        {
          album_id: 9,
          track_duration: '00:03:32',
          track_title: 'All I Want',
        },
        {
          album_id: 9,
          track_duration: '00:03:33',
          track_title: 'My Old Man',
        },
        {
          album_id: 9,
          track_duration: '00:03:25',
          track_title: 'Little Green',
        },
        {
          album_id: 9,
          track_duration: '00:03:00',
          track_title: 'Carey',
        },
        {
          album_id: 9,
          track_duration: '00:03:00',
          track_title: 'Blue',
        },
        {
          album_id: 9,
          track_duration: '00:03:48',
          track_title: 'California',
        },
        {
          album_id: 9,
          track_duration: '00:02:50',
          track_title: 'This Flight Tonight',
        },
        {
          album_id: 9,
          track_duration: '00:04:00',
          track_title: 'River',
        },
        {
          album_id: 9,
          track_duration: '00:04:20',
          track_title: 'A Case of You',
        },
        {
          album_id: 9,
          track_duration: '00:04:13',
          track_title: 'The Last Time I Saw Richard',
        },
        // Face Value
        {
          album_id: 10,
          track_duration: '00:05:35',
          track_title: 'In the Air Tonight',
        },
        {
          album_id: 10,
          track_duration: '00:03:56',
          track_title: 'This Must Be Love',
        },
        {
          album_id: 10,
          track_duration: '00:03:55',
          track_title: 'Behind the Lines',
        },
        {
          album_id: 10,
          track_duration: '00:03:17',
          track_title: 'The Roof Is Leaking',
        },
        {
          album_id: 10,
          track_duration: '00:02:49',
          track_title: 'Droned',
        },
        {
          album_id: 10,
          track_duration: '00:05:22',
          track_title: 'Hand in Hand',
        },
        {
          album_id: 10,
          track_duration: '00:03:46',
          track_title: 'I Missed Again',
        },
        {
          album_id: 10,
          track_duration: '00:02:33',
          track_title: 'You Know What I Mean',
        },
        {
          album_id: 10,
          track_duration: '00:04:14',
          track_title: 'Thunder and Lightning',
        },
        {
          album_id: 10,
          track_duration: '00:02:35',
          track_title: "I'm Not Moving",
        },
        {
          album_id: 10,
          track_duration: '00:04:55',
          track_title: 'If Leaving Me Is Easy',
        },
        {
          album_id: 10,
          track_duration: '00:04:46',
          track_title: 'Tomorrow Never Knows',
        },
        // Paranoid
        {
          album_id: 11,
          track_duration: '00:07:57',
          track_title: 'War Pigs',
        },
        {
          album_id: 11,
          track_duration: '00:02:52',
          track_title: 'Paranoid',
        },
        {
          album_id: 11,
          track_duration: '00:04:34',
          track_title: 'Planet Caravan',
        },
        {
          album_id: 11,
          track_duration: '00:05:56',
          track_title: 'Iron Man',
        },
        {
          album_id: 11,
          track_duration: '00:04:52',
          track_title: 'Electric Funeral',
        },
        {
          album_id: 11,
          track_duration: '00:07:07',
          track_title: 'Hand of Doom',
        },
        {
          album_id: 11,
          track_duration: '00:02:30',
          track_title: 'Rat Salad',
        },
        {
          album_id: 11,
          track_duration: '00:06:14',
          track_title: 'Fairies Wear Boots',
        },
        // Weezer

        {
          album_id: 12,
          track_duration: '00:03:23',
          track_title: 'My Name Is Jonas',
        },
        {
          album_id: 12,
          track_duration: '00:03:14',
          track_title: 'No One Else',
        },
        {
          album_id: 12,
          track_duration: '00:04:26',
          track_title: 'The World Has Turned and Left Me Here',
        },
        {
          album_id: 12,
          track_duration: '00:02:40',
          track_title: 'Buddy Holly',
        },
        {
          album_id: 12,
          track_duration: '00:04:55',
          track_title: 'Undone - The Sweater Song',
        },
        {
          album_id: 12,
          track_duration: '00:03:04',
          track_title: 'Surf Wax America',
        },
        {
          album_id: 12,
          track_duration: '00:04:18',
          track_title: "Say It Ain't So",
        },
        {
          album_id: 12,
          track_duration: '00:03:56',
          track_title: 'In the Garage',
        },
        {
          album_id: 12,
          track_duration: '00:03:26',
          track_title: 'Holiday',
        },
        {
          album_id: 12,
          track_duration: '00:08:03',
          track_title: 'Only in Dreams',
        },

        // Pinkerton
        {
          album_id: 13,
          track_duration: '00:03:03',
          track_title: 'Tired of Sex',
        },
        {
          album_id: 13,
          track_duration: '00:02:54',
          track_title: 'Getchoo',
        },
        {
          album_id: 13,
          track_duration: '00:03:03',
          track_title: 'No Other One',
        },
        {
          album_id: 13,
          track_duration: '00:02:10',
          track_title: 'Why Bother?',
        },
        {
          album_id: 13,
          track_duration: '00:04:34',
          track_title: 'Across the Sea',
        },
        {
          album_id: 13,
          track_duration: '00:04:19',
          track_title: 'The Good Life',
        },
        {
          album_id: 13,
          track_duration: '00:04:05',
          track_title: 'El Scorcho',
        },
        {
          album_id: 13,
          track_duration: '00:04:00',
          track_title: 'Pink Triangle',
        },
        {
          album_id: 13,
          track_duration: '00:03:48',
          track_title: 'Falling for You',
        },
        {
          album_id: 13,
          track_duration: '00:02:53',
          track_title: 'Butterfly',
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('track', null, {})
  },
}
