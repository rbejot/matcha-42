module.exports = async (req, res) => {
  const {pseudo, name, firstname, gender, profil_picture, sexual_orientation, bio, location} = req.body
  let elements = {}
  if (pseudo !== undefined) {
    if (Object.keys(await res.app.get('db').find('pseudo', pseudo, 'users')).length === 0)
      elements.pseudo = pseudo
    else
      throw 'Pseudo already taken'
  }
  if (name !== undefined)
    elements.name = name
  if (firstname !== undefined)
    elements.firstname = firstname
  if (gender !== undefined)
    elements.gender = gender
  if (sexual_orientation !== undefined)
    elements.sexual_orientation = sexual_orientation
  if (bio !== undefined)
    elements.bio = encodeURI(bio)
  if (location !== undefined)
    elements.location = location
  if (profil_picture !== undefined) {
    await res.app.get('db').findByTwo('user_id', 'picture', req.decoded.id, profil_picture, 'pictures')
    elements.profil_picture = profil_picture
  }
  return elements
}