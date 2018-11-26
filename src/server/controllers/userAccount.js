const pass = require('../helpers/password')
const Mail = require('../helpers/mail')
const mail = new Mail()
const Token = require('../helpers/token')
const token = new Token()
const processProfil = require('../helpers/profil')

exports.createUser = async (req, res) => {
  req.body.password = await pass.hashPassword(req.body.password)
  let response = await res.app.get('db').createUser(req.body)
  mail.registerMail(req.body.mail, response.confirmation, response.firstname)
  res.status(200).json({
    message: `User ${req.body.pseudo} created`
  })
}

exports.loginUser = async (req, res) => {
  const response = await res.app.get('db').findByOne('mail', req.body.mail, 'users')
  await pass.comparePassword(req.body.password, response[0].password)
  if (response[0].confirmed == 0)
    throw 'User must confirm his mail before login'
  const auth = await token.create(response[0].id, processProfil(response[0]))
  res.status(200).json({
    message: 'User connected',
    token: auth
  })
}

exports.confirmUser = async (req, res) => {
  const response = await res.app.get('db').findByTwo('firstname', 'confirmation_code', req.params.firstname, req.params.id, 'users')
  if (response[0].confirmed === 1)
    throw 'User already confirmed'
  await res.app.get('db').updateEntry({
    confirmed: 1
  }, 'id', `'${response[0].id}'`, 'users')
  mail.confirmationMail(response[0].mail, response[0].firstname)
  const auth = await token.create(response[0].id, processProfil(response[0]))
  res.status(200).redirect(`http://localhost:3000/home?auth=${auth}`)
}