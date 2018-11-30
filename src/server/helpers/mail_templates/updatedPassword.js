module.exports = (firstname) => {
  const html = `
  <p>Bonjour ${firstname},</p>
  <p>Votre mot de passe a été modifié récemment. Si vous n'êtes pas à l'origine de ce changement répondez à ce mail.</p>
  <a href='http://localhost:3000/profil'>Mon profil</a>
  `
  return html
}