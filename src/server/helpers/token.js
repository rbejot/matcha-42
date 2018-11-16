const jwt = require('jsonwebtoken')

module.exports = class Token {
  constructor() {
    this.options = {
      expiresIn: '2d'
    }
    this.secret = process.env.JWT_SECRET
  }

  create(userId, profil) {
    return new Promise((resolve, reject) => {
      jwt.sign({id: userId, profil: profil}, this.secret, this.options, (err, token) => {
        if (err) reject(err)
        else resolve(token)
      })
    })
  }

  decode(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.secret, this.options, (err, decoded) => {
        if (err) reject(err)
        else resolve(decoded)
      })
    })
  }

}