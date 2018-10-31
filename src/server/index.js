const app           = require('express')()
const compression   = require('compression')
const helmet        = require('helmet')
const bodyParser    = require('body-parser')
require('dotenv').config()

const Db = require('./models/')
const db = new Db()

app.use(helmet())
app.use(compression())
app.set('db', db)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
require('./routes/')(app)
app.listen(3000, () => {
    console.log('PORT: http://localhost:3000')
})