const controllers = require('../controllers/')
const validator   = require('../middleware/validate')

module.exports = (app) => {
  app.route('/register')
    .post(validator.createUser, controllers.userAccount.createUser)

  app.route('/admin')
    .post(validator.admin, controllers.admin.createTable)
    .delete(validator.admin, controllers.admin.deleteTable)

  app.route('/confirmation/:id/:pseudo')
    .get(validator.confirm, controllers.userAccount.confirmUser)
}