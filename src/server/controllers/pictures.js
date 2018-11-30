const fs = require('fs')

exports.getPictures = async (req, res) => {
  const response = await res.app.get('db').find('user_id', req.decoded.id, 'pictures')
  if (response.length === 0)
    throw 'No pictures'
  let pictures = []
  for (let i = 0; i < response.length; i++) {
    pictures.push(response[i].picture)
  }
  res.status(200).json({
    message: 'Profil pictures',
    pictures: pictures
  })
}

exports.addPicture = async (req, res) => {
  let elements = {
    user_id: req.decoded.id,
    picture: req.file.filename
  }
  await res.app.get('db').insertEntry(elements, 'pictures')
  res.status(200).json({
    message: 'Pictures added'
  })
}

exports.deletePicture = async (req, res) => {
  await res.app.get('db').findByTwo('user_id', 'picture', req.decoded.id, req.body.picture, 'pictures')
  await res.app.get('db').delete('user_id', 'picture', req.decoded.id, req.body.picture, 'pictures')
  fs.unlinkSync(`/app/src/server/public/${req.body.picture}`)
  res.status(200).json({
    message: 'Picture deleted'
  })
}