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
    const connection = mysql.createConnection({
        host: 'db',
        user: 'rbejot',
        password: 'rbejot',
        database: 'matcha'
    })
      
    connection.connect((err) => {
        if (err) {
            console.error('error connecting:  ' + err.stack)
        }
        console.log('connected as id ' + connection.threadId)
    })
    
    connection.query('SELECT 1 + 1 AS solution', (err, results, fields) => {
        if (err) throw err
        console.log('The solution is: ', results[0].solution)
    })

    connection.query('CREATE DATABASE IF NOT EXISTS matcha', (err, results, fields) => {
        if (err) throw err
    })
    connection.query('SHOW TABLES', (err, results, fields) => {
        if (err) throw err
        console.log(fields)
    })
    // connection.query()
    connection.end()
})