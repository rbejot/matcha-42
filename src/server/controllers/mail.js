const Mail = require('../helpers/mail')
const mail = new Mail()

exports.updateMail = async (req, res) => {
  const response = await res.app.get('db').find('mail', req.body.mail, 'users')
  if (response.length === 0)
    await res.app.get('db').updateEntry({mail: req.body.mail}, 'id', req.decoded.id, 'users')
  else
    throw 'Mail already taken'
  mail.mailChangeMail(req.body.mail, req.decoded.profil.firstname.charAt(0).toUpperCase() + req.decoded.profil.firstname.slice(1))
  res.status(200).json({
    message: 'Email updated'
  })
}