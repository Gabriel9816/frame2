const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'mysql-container',
  user: 'root',
  password: '123',
  database: 'frame2'
});

connection.connect();

app.get('/dogs', function(req, res) {
  connection.query('SELECT * FROM dogs', function (error, results) {

    if (error) { 
      throw error
    };

    res.send(results.map(item => ({ name: item.name, age: item.age })));
  });
});


app.listen(9001, '0.0.0.0', function() {
  console.log('Listening on port 9001');
})
