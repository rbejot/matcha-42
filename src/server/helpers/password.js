const bcrypt = require('bcrypt-nodejs')

exports.hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, null, null, (err, hash) => {
      if (err) reject(`Error in hashing password : ${err}`)
      else resolve(hash)
    })
  })
}

exports.comparePassword = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, res) => {
      if (err) reject(`Error in comparing password : ${err}`)
      else {
        if (res === true)
          resolve(res)
        else
          reject('Password doesn\'t match')
      }
    })
  })
}
