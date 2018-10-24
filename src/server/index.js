const app           = require('express')()
const compression   = require('compression')
const helmet        = require('helmet')
const mysql = require('mysql')

app.use(helmet())
app.use(compression())
app.listen(3000, () => {
    console.log('PORT: http://localhost:3000')
})
app.get('/', (res, req) => {
    const con = mysql.createConnection({
        host: 'db',
        user: 'rbejot',
        password: 'rbejot',
        database: 'matcha'
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
})