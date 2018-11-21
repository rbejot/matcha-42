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