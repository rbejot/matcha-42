const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'mysql://mysql.test',
  user: 'root',
  password: 'pass',
  database: 'test'
})

con.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Connection with Database established')
})

con.end((err) => {
  if (err) console.log(err)
  else console.log('Connection with Databse terminated')
})