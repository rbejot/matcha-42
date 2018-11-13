exports.mail = (firstname) => {
  const html = `
  <p>Bonjour ${firstname},</p>
  <p>Votre compte est bien confirmé, vous pouvez maintenant compléter votre profil afin de pouvoir rencontrer des utilisateurs :</p>
  <a href='http://localhost:3000/profil'>Mon profil</a>
  `
  return html
}