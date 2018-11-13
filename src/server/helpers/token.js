const jwt = require('jsonwebtoken')

//new Token({id: 'awfawf'})
module.exports = class Token {
  constructor() {
    this.options = {
      expiresIn: '2d'
    }
    this.secret = process.env.JWT_SECRET
  }

  create(userId) {
    return new Promise((resolve, reject) => {
      jwt.sign({id: userId}, this.secret, this.options, (err, token) => {
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