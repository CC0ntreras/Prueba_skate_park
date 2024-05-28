const { Pool } = require('pg');

const pool = new Pool({
    user: 'USSER',
    host: 'localhost',
    database: 'skatepark',
    password: 'xxxxxxx',
    port: 5432,
});

module.exports = pool;