`'use strict';`,
console.log('je suis content de faire du JS');
/////////
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cours4'
});
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  connection.query('SELECT DISTINCT r.timeToCook FROM recipe r', function (error, results, fields) {
    if (error) throw error;

    for (var i = 0; i <results.length; i++)
    {
    console.log("", results[i].timeToCook); // results[0].name
    }

    /*connection.query('SELECT r.name FROM recipe r', function (error, results, fields) {
      if (error) throw error;

      for (const i = 0; i <results.length; i++)
      {
      console.log("", results[i].name); // results[0].name
    } */
    //variable stocké à dans la fonction res.send pour afficher tableau HTML
res.send(results);
  });

});

connection.connect(function(){

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

});
