require('dotenv').config()
const app           = require('express')()
const compression   = require('compression')
const helmet        = require('helmet')
const bodyParser    = require('body-parser')

const environment   = process.env.NODE_ENV
const stage         = require('./config')[environment]

const Db = require('./models/')
const db = new Db()

app.use(helmet())
app.use(compression())
app.set('db', db)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
require('./routes/')(app)
app.listen(stage.port, () => {
    console.log(`Listen on : ${stage.port}`)
})