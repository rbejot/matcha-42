const controllers  = require('../controllers/')
const validator    = require('../middleware/validate')
const wrap         = require('../middleware/wrap')
const upload       = require('../helpers/upload')

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

  app.route('/password')
    .post(wrap(validator.token), validator.password, wrap(controllers.password.updatePassword))
    .get(validator.mail, wrap(controllers.password.forgotPassword))

  app.route('/password/:id/:firstname')
    .get(validator.confirm, wrap(controllers.password.confirmForgotPassword))

  app.route('/picture')
    .post(wrap(validator.token), upload.single('picture'), wrap(controllers.pictures.addPicture))
    .delete(wrap(validator.token), validator.deletePicture, wrap(controllers.pictures.deletePicture))

  app.route('/mail')
    .post(wrap(validator.token), validator.mail, wrap(controllers.mail.updateMail))
    
  app.route('/auth')
    .get(wrap(validator.token), wrap(controllers.auth.checkAuth))

  app.route('/admin')
    .post(validator.admin, wrap(controllers.admin.createTable))
    .delete(validator.admin, wrap(controllers.admin.deleteTable))
    .get(validator.admin, wrap(controllers.admin.showTables))
}