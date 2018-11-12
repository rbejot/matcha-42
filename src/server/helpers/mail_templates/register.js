exports.mail = (confirmationCode, firstname) => {
  const html = `
  <p>Bonjour ${firstname},</p>
  <p>Bienvenue sur matcha, veuillez confirmez votre email en cliquant sur le lien si dessous :</p>
  <a href='http://localhost:3000/confirmation/${confirmationCode}/${firstname}'>Confirmez votre email</a>
  `
  return html
}