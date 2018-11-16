const pass = require('../helpers/password.js')
const Mail = require('../helpers/mail')
const mail = new Mail()
const Token = require('../helpers/token')
const token = new Token()

exports.createUser = async (req, res) => {
  try {
    req.body.password = await pass.hashPassword(req.body.password)
    let response = await res.app.get('db').createUser(req.body)
    mail.registerMail(req.body.mail, response.confirmation, response.firstname)
    res.status(201).json({
      message: `User ${req.body.pseudo} created`
    })
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}

exports.loginUser = async (req, res) => {
  try {
    const response = await res.app.get('db').findByOne('mail', req.body.mail, 'users')
    await pass.comparePassword(req.body.password, response[0].password)
    const auth = await token.create(response[0].id)
    res.status(201).json({
      message: 'User connected',
      token: auth
    })
  } catch (err) {
    res.status(401).json({
      error: err
    })
  }
}

exports.confirmUser = async (req, res) => {
  try {
    const response = await res.app.get('db').findByTwo('firstname','confirmation_code', req.params.firstname, req.params.id, 'users')
    if (response[0].confirmed === 1)
      throw 'User already confirmed'
    await res.app.get('db').updateEntry({
      confirmed: 1
    }, 'id', `'${response[0].id}'`, 'users')
    mail.confirmationMail(response[0].mail, response[0].firstname)
    const auth = await token.create(response[0].id)
    res.status(201).redirect(`http://localhost:3000/home?auth=${auth}`)
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}

exports.checkUserAuth = async (req, res) => {
    try {
      const response = await res.app.get('db').findByOne('id', req.decoded.id, 'users')
      res.status(200).json({
        message: `Authorized access for user ${response[0].pseudo}`
      })
    } catch (err) {
      res.status(401).json({
        error: err
      })
    }
}