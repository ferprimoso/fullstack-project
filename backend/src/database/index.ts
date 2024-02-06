import { Sequelize } from 'sequelize' // importar o sequelize

const dbName = 'notes_app' // passar os dados do .env para as constantes
const dbUser = 'root'
const dbHost = 'localhost'
const dbPassword = 'collins'

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  // passar os dados para o sequelize
  dialect: 'mysql', // informar o tipo de banco que vamos utilizar
  host: dbHost, // o host, neste caso estamos com um banco local
})

export default sequelize // exportar
