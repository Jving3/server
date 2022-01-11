const express = require("express");
const app = express();
const mysql = require('mysql')

 const db = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: 'root',
   database: 'cruddatabase',
 });

app.get("/", (req, res) => {
  const sqlInsert = "INSERT INTO ports (nombre, tipo) VALUES ('andres', 'conteo');"
  db.query(sqlInsert, (err, result) => {
    res.send("Hello Jorge Luis");
  })
});



app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
