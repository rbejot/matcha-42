exports.mail = (confirmationCode, pseudo) => {
  const html = `
  <p>Bonjour ${pseudo},</p>
  <p>Bienvenue sur matcha, veuillez confirmez votre email en cliquant sur le lien si dessous :</p>
  <a href='http://localhost:3000/confirmation/${confirmationCode}'>Confirmez votre email</a>
  `
  return html
}