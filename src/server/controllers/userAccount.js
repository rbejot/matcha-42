// const nodemailer = require('nodemailer')
// const smtpTransport = nodemailer.createTransport("SMTP",{
//   service: process.env.MAIL_SERVICE,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASSWORD
//   }
// });

exports.createUser = async (req, res) => {
  try {
    // const mail = {
    //   from: process.env.MAIL_USER,
    //   to: req.body.mail,
    //   subject: 'Confirmez votre email',
    //   html: 'Lien'
    // }
    // smtpTransport.sendMail(mail, function(error, response){
    //   if(error){
    //     console.log("Erreur lors de l'envoie du mail!");
    //     console.log(error);
    //   }else{
    //     console.log("Mail envoyé avec succès!")
    //   }
    //   smtpTransport.close();
    // });
    res.status(201).json({
      message: await res.app.get('db').createUser(req.body)
    })
  } catch (err) {
    res.status(500).json({
      message: err
    })
  }
}