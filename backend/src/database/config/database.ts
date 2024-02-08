import 'dotenv/config'
import { type Options } from 'sequelize'

const { DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_TEST_HOST } = process.env

const config: Options = {
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  host: process.env.NODE_ENV === 'test' ? DB_TEST_HOST : DB_HOST,
  dialect: 'mysql',
  logging: false,
}

export = config
