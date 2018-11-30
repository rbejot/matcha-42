const update = require('../helpers/update')
const Token = require('../helpers/token')
const token = new Token()
const processProfil = require('../helpers/profil')
const processTags = require('../helpers/tags')
const processPictures = require('../helpers/pictures')

exports.getProfil = async (req, res) => {
  const response = await res.app.get('db').find('id', req.decoded.id, 'users')
  const tags = await res.app.get('db').find('user_id', req.decoded.id, 'interests')
  const pictures = await res.app.get('db').find('user_id', req.decoded.id, 'pictures')
  res.status(200).json({
    profil: processProfil(response[0]),
    tags: processTags(tags),
    pictures: processPictures(pictures)
  })
}

exports.getPublicProfil = async (req, res) => {
  await res.app.get('db').findByOne('id', req.params.id, 'users')
  const response = await res.app.get('db').find('id', req.params.id, 'users')
  const tags = await res.app.get('db').find('user_id', req.params.id, 'interests')
  const pictures = await res.app.get('db').find('user_id', req.params.id, 'pictures')
  res.status(200).json({
    profil: processProfil(response[0]),
    tags: processTags(tags),
    pictures: processPictures(pictures)
  })
}

exports.updateProfil = async (req, res) => {
  const elements = await update(req, res)
  await res.app.get('db').updateEntry(elements, 'id', req.decoded.id, 'users')
  Object.assign(req.decoded.profil, elements)
  const auth = await token.create(req.decoded.id, processProfil(req.decoded.profil))
  res.status(200).json({
    message: 'Profil updated',
    token: auth
  })
}