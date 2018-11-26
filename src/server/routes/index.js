const controllers  = require('../controllers/')
const validator    = require('../middleware/validate')
const wrap         = require('../middleware/wrap')

module.exports = (app) => {
  app.route('/register')
    .post(validator.createUser, wrap(controllers.userAccount.createUser))

  app.route('/login')
    .post(validator.loginUser, wrap(controllers.userAccount.loginUser))

  app.route('/confirmation/:id/:firstname')
    .get(validator.confirm, wrap(controllers.userAccount.confirmUser))

  app.route('/profil')
    .get(wrap(validator.token), wrap(controllers.profil.getProfil))
    .post(validator.token, validator.updateProfil, wrap(controllers.profil.updateProfil))

  app.route('/auth')
    .get(wrap(validator.token), wrap(controllers.auth.checkAuth))

  app.route('/admin')
    .post(validator.admin, wrap(controllers.admin.createTable))
    .delete(validator.admin, wrap(controllers.admin.deleteTable))
    .get(validator.admin, wrap(controllers.admin.showTables))
}