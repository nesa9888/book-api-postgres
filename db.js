const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'books',
    password: 'shadym1988',
    port: 5432
});

module.exports = pool;
