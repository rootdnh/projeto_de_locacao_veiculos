const mysql = require('mysql2')
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database:"locadora_de_veiculos",
  });

  //2FWUwj2y68zGRmZ

  con.connect(function (err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    con.query('show tables', (err, rows) => {
        if (rows.length === 0) {
          const sql = String(fs.readFileSync('./locadora_de_veiculos.sql'))
          connection.query(sql, (err) => {
            if (!err) {
              console.log('database created.')
            }
          })
        }
      })
  })

  


  module.exports = con