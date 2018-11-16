const controllers = require('../controllers/')
const validator   = require('../middleware/validate')

module.exports = (app) => {
  app.route('/register')
    .post(validator.createUser, controllers.userAccount.createUser)

  app.route('/login')
    .post(validator.loginUser, controllers.userAccount.loginUser)

  app.route('/confirmation/:id/:firstname')
    .get(validator.confirm, controllers.userAccount.confirmUser)

  app.route('/auth')
    .get(validator.token, controllers.userAccount.checkUserAuth)

  app.route('/admin')
    .post(validator.admin, controllers.admin.createTable)
    .delete(validator.admin, controllers.admin.deleteTable)
}