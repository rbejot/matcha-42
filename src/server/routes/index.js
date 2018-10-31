const controllers = require('../controllers/')
const validator   = require('../middleware/validate')

module.exports = (app) => {
  app.route('/register')
    .post(validator.createUser, controllers.userAccount.createUser)
}