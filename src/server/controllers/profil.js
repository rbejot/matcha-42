const update = require('../helpers/update')
const Token = require('../helpers/token')
const token = new Token()
const processProfil = require('../helpers/profil')

exports.getProfil = async (req, res) => {
  res.status(200).json({
    profil: req.decoded.profil
  })
}

exports.updateProfil = async (req, res) => {
  const elements = await update(req, res)
  await res.app.get('db').updateEntry(elements, 'id', req.decoded.id, 'users')
  Object.assign(req.decoded.profil, elements)
  const auth = await token.create(response[0].id, processProfil(req.decoded.profil))
  res.status(200).json({
    message: 'Profil updated',
    token: auth
  })
}