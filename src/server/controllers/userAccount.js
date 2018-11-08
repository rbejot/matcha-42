const Mail = require('../helpers/mail')
const mail = new Mail()

exports.createUser = async (req, res) => {
  try {
    let response = await res.app.get('db').createUser(req.body) 
    mail.registerMail(req.body.mail, response.confirmation, response.pseudo)
    res.status(201).json({
      message: response.message
    })
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}

exports.confirmUser = (req, res) => {
  res.json({id: req.params.id, pseudo: req.params.pseudo})
}