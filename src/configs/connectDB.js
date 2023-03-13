

import mysql from 'mysql2/promise';

// create the connection to database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3307,
    database: 'travel',
    password: ''
});

// simple query
// connection.query(
//     'SELECT * FROM  `users` ',
//     function (err, results, fields) {
//         if (err) console.log('>>>> err', err)
//         console.log('check mysql >>>>')

//         console.log(results); // results contains rows returned by server
//     }
// );

export default pool;

