exports.addTag = async (req, res) => {
  // TODO: Add suspicious dictionnary to prevent bad language
  const interests = await res.app.get('db').find('user_id', req.decoded.id, 'interests')
  if (interests.length >= 7)
    throw 'You can only choose 7 tags maximum'
  let user_interests = []
  for (i in interests) {
    user_interests.push(interests[i].interest)
  }
  const tags = await res.app.get('db').showTable('tags', 'tag')
  let tags_list = []
  for (i in tags) {
    tags_list.push(tags[i].tag)
  }
  if (tags_list.indexOf(req.body.tag) === -1)
    await res.app.get('db').insertEntry({tag: req.body.tag}, 'tags')
  if (user_interests.indexOf(req.body.tag) === -1) {
    let elements = {
      user_id: req.decoded.id,
      interest: req.body.tag
    }
    await res.app.get('db').insertEntry(elements, 'interests')
  } else {
    throw `tag ${req.body.tag} already added`
  }
  res.status(200).json({
    message: `tag ${req.body.tag} added succesfully`
  })
}

exports.getTags = async (req, res) => {
  const interests = await res.app.get('db').find('user_id', req.decoded.id, 'interests')
  let user_interests = []
  for (i in interests) {
    user_interests.push(interests[i].interest)
  }
  res.status(200).json({
    tags: user_interests
  })
}

exports.deleteTag = async (req, res) => {
  //FIXME: call one time res.app.get(db)
  await res.app.get('db').findByTwo('interest', 'user_id', req.body.tag, req.decoded.id, 'interests')
  await res.app.get('db').delete('interest', 'user_id', req.body.tag, req.decoded.id, 'interests')
  res.status(200).json({
    message: `tag ${req.body.tag} deleted`
  })
}

exports.getSuggestTags = async (req, res) => {
  const tags = await res.app.get('db').showTable('tags', 'tag')
  let tags_arr = []
  for (e in tags) {
    tags_arr.push(tags[e].tag)
  }
  console.log(tags)
  res.status(200).json({
    tags: tags_arr
  })
}