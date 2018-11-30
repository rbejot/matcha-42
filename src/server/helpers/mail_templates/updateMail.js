module.exports = (firstname) => {
  const html = `
  <p>Bonjour ${firstname},</p>
  <p>Votre mail a été modifié avec succès.</p>
  <a href='http://localhost:3000/profil'>Mon profil</a>
  `
  return html
}