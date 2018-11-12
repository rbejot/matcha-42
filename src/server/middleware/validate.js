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
    res.status(400).json({message: err})
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
    res.status(400).json({message: err})
  else
    next()
}

exports.admin = (req, res, next) => {
  let err = []
  let request = ['table']
  if (req.body.pass !== process.env.ADMIN_PASS)
    err.push('Bad password')
  if (request.indexOf(Object.keys(req.body)[1]) === -1)
    err.push(`Invalid request, ${Object.keys(req.body)[1]} not known`)
  if (err.length > 0)
    res.status(400).json({message: err})
  else
    next()
}