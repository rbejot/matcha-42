const pass = require('../helpers/password')
const Mail = require('../helpers/mail')
const mail = new Mail()
const id = require('../helpers/id')
const Token = require('../helpers/token')
const token = new Token()
const processProfil = require('../helpers/profil')

exports.updatePassword = async (req, res) => {
  const response = await res.app.get('db').findByOne('id', req.decoded.id, 'users')
  if (response[0].forgot === 0 && req.body.old_pass)
    await pass.comparePassword(req.body.old_pass, response[0].password)
  const new_pass = await pass.hashPassword(req.body.new_pass)
  await res.app.get('db').updateEntry({password: new_pass, forgot: 0}, 'id', req.decoded.id, 'users')
  console.log(response[0].mail)
  mail.passwordChangeMail(response[0].mail, response[0].firstname)
  res.status(200).json({
    message: 'Password updated'
  })
}

exports.forgotPassword = async (req, res) => {
  const response = await res.app.get('db').findByOne('mail', req.query.mail, 'users')
  mail.forgotPassword(response[0].mail, response[0].confirmation_code, response[0].firstname)
  res.status(200).json({
    message: 'An email has been send to change the password'
  })
}

exports.confirmForgotPassword = async (req, res) => {
  const response = await res.app.get('db').findByTwo('firstname', 'confirmation_code', req.params.firstname, req.params.id, 'users')
  await res.app.get('db').updateEntry({
    forgot: 1,
    confirmation_code: id.randomUserId()
  }, 'id', response[0].id, 'users')
  const auth = await token.create(response[0].id, processProfil(response[0]))
  res.status(200).redirect(`http://localhost:3000/home?auth=${auth}`)
}

