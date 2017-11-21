`'use strict';`,
console.log('je suis content de faire du JS');
/////////
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cours4'
});

connection.connect();

connection.query('SELECT DISTINCT r.timeToCook FROM recipe r', function (error, results, fields) {
  if (error) throw error;

  for (var i = 0; i <results.length; i++)
  {
  console.log("", results[i].timeToCook); // results[0].name
  }

  /*connection.query('SELECT r.name FROM recipe r', function (error, results, fields) {
    if (error) throw error;

    for (var i = 0; i <results.length; i++)
    {
    console.log("", results[i].name); // results[0].name
  } */

});
connection.end();
