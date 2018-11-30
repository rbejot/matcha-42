module.exports = (confirmationCode, firstname) => {
  const html = `
  <p>Bonjour ${firstname},</p>
  <p>Vous avez fait une demande pour avoir un nouveau mot de passe. Si ce n'est pas vous, ne tenait pas compte de ce message.</p>
  <a href='http://localhost:3000/password/${confirmationCode}/${firstname}'>Confirmez votre demande de mot de passe</a>
  `
  return html
}