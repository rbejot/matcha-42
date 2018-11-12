const nodemailer = require('nodemailer')
const template = require('./mail_templates/')

module.exports = class Mail {
  constructor() {
    this.transporter = nodemailer.createTransport("SMTP", {
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
      }
    })
  }

  mailOptions(mail, subject, html) {
    const options = {
      from: `Matcha ${process.env.MAIL_USER}`,
      to: mail,
      subject: subject,
      html: html
    }
    return options
  }

  registerMail(mail, confirmationCode, firstname) {
    return new Promise((resolve, reject) => {
      let subject = 'Confirmez votre email'
      let html = template.register.mail(confirmationCode, firstname)
      this.transporter.sendMail(this.mailOptions(mail, subject, html), (err, info) => {
        if (err) reject(err)
        else resolve({message: 'mail envoye'})
      })
    })
  }

  confirmationMail(mail, firstname) {
    return new Promise((resolve, reject) => {
      let subject = 'Bienvenue sur Matcha !'
      let html = template.confirmation.mail(firstname)
      this.transporter.sendMail(this.mailOptions(mail, subject, html), (err, info) => {
        if (err) reject(err)
        else resolve({message: 'mail envoyé'})
      })
    })
  }
}