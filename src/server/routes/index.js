const controllers = require('../controllers/')
const validator   = require('../middleware/validate')

module.exports = (app) => {
  app.route('/register')
    .post(validator.createUser, controllers.userAccount.createUser)

  app.route('/confirmation/:id/:firstname')
    .get(validator.confirm, controllers.userAccount.confirmUser)

  app.route('/admin')
    .post(validator.admin, controllers.admin.createTable)
    .delete(validator.admin, controllers.admin.deleteTable)
}