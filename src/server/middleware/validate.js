const verify = require('./verify')

exports.createUser = (req, res, next) => {
  let err = []
  if (Object.keys(req.body).length > 5)
    err.push('Un des paramètres est en trop')
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