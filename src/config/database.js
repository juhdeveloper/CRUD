const Pool = require('pg').Pool;

const connection = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CRUD',
  password: 'root',
  port: 5432,
})

connection.on('connect', () => {
  console.log('Connection with successfully');
});

module.exports = {
  query: (text, params) => connection.query(text, params),
}