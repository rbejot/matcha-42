const Mail = require('../helpers/mail')
const mail = new Mail()
// const argon2 = require('argon2')

exports.createUser = async (req, res) => {
  try {
    // console.log(await argon2.hash(req.body.password))
    let response = await res.app.get('db').createUser(req.body)
    mail.registerMail(req.body.mail, response.confirmation, response.firstname)
  } catch (err) {
    res.status(500).json({
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
    res.status(201).redirect('https://google.com')
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}