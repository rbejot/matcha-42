const app           = require('express')()
const compression   = require('compression')
const helmet        = require('helmet')

app.use(helmet())
app.use(compression())
app.listen(3000, () => {
    console.log('http://localhost:3000')
})
//utiliser reverse proxy en plus si trafic élevé

