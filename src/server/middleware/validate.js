const verify = require('./verify')

exports.createUser = (req, res, next) => {
  let err = []
  if (Object.keys(req.body).length > 5)
    err.push('Too many parameters')
  if (verify.mail(req.body.mail))
    err.push(verify.mail(req.body.mail))
  if (verify.pass(req.body.password))
    err.push(verify.pass(req.body.password))
  if (verify.name(req.body.name))
    err.push(verify.name(req.body.name))
  if (verify.firstname(req.body.firstname))
    err.push(verify.firstname(req.body.firstname))
  if (verify.pseudo(req.body.pseudo))
    err.push(verify.pseudo(req.body.pseudo))
  if (err.length > 0)
    next(err)
  else
    next()
}

exports.password = (req, res, next) => {
  let err = []
  if (!req.body.old_pass && !req.body.new_pass || !req.body.new_pass && req.body.forgotten === true)
    err.push('You must provide [old_pass] and [new_pass]')
  if (!req.body.forgotten) {
    if (verify.pass(req.body.old_pass))
    err.push(verify.pass(req.body.old_pass))
  }
  if (verify.pass(req.body.new_pass))
    err.push(verify.pass(req.body.new_pass))
  if (err.length > 0)
    next(err)
  else
    next()
}

exports.mail = (req, res, next) => {
  let err = []
  if (verify.mail(req.query.mail))
    err.push(verify.mail(req.query.mail))
  if (err.length > 0)
    next(err)
  else
    next()
}

exports.loginUser = (req, res, next) => {
  let err = []
  if (Object.keys(req.body).length > 2)
    err.push('Too many parameters')
  if (verify.mail(req.body.mail))
    err.push(verify.mail(req.body.mail))
  if (verify.pass(req.body.password))
    err.push(verify.pass(req.body.password))
  if (err.length > 0)
    next(err)
  else
    next()
}

exports.confirm = (req, res, next) => {
  let err = []
  let id = req.params.id
  let firstname = req.params.firstname
  if (id.length !== 10)
    err.push('Wrong confirmation code')
  if (verify.firstname(firstname))
    err.push('Wrong link')  
  if (err.length > 0)
    next(err)
  else
    next()
}

exports.admin = (req, res, next) => {
  let err = []
  let request = ['table']
  if (!req.body.pass && !req.query.pass)
    err.push('You must give a password')
  if (req.body.pass && req.body.pass !== process.env.ADMIN_PASS ||
    req.query.pass && req.query.pass !== process.env.ADMIN_PASS)
    err.push('Bad password')
  if (!req.body.table && !req.query.pass)
    err.push('You must give a table name')
  if (err.length > 0)
    next(err)
  else
    next()
}

exports.token = async (req, res, next) => {
  let token = req.headers.authorization.split(' ')[1]
  if (!token)
    throw 'No token provided'
  req.decoded = await verify.checkToken(token)
  next()
}

exports.updateProfil = (req, res, next) => {
  let err = []
  if (Object.keys(req.body).length === 0)
    err.push('You must update at least one entry')
  if (req.body.gender && verify.gender(req.body.gender))
    err.push(verify.gender(req.body.gender))
  if (req.body.sexual_orientation && verify.orientation(req.body.sexual_orientation))
    err.push(verify.orientation(req.body.sexual_orientation))
  if (req.body.bio && verify.bio(req.body.bio))
    err.push(verify.bio(req.body.bio))
  if (req.body.pseudo && verify.pseudo(req.body.pseudo))
    err.push(verify.pseudo(req.body.pseudo))
  if (req.body.name && verify.name(req.body.name))
    err.push(verify.name(req.body.name))
  if (req.body.firstname && verify.firstname(req.body.firstname))
    err.push(verify.firstname(req.body.firstname))
  if (err.length > 0)
    next(err)
  else
    next()
}

exports.deletePicture = (req, res, next) => {
  let err = []
  if (Object.keys(req.body).length > 1)
    err.push('Too much parameters, only accept [picture]')
  if (!req.body.picture)
    err.push('picture parameters not found')
  if (err.length > 0)
    next(err)
  else
    next()
}