
const { Pool } = require('pg');
const dataBase = new Pool({
  host:'localhost',
  user: 'postgres',
  password:'newpassword',
  database: 'postgres',
  port: 5400,
  allowExitOnIdle: true,
})

dataBase.on('connect', () => {
  console.log('Conexión con la base de datos');
});

dataBase.on('error', (error) => {
  console.error('Error en la conexión', error.message);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});


module.exports = dataBase