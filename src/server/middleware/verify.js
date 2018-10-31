exports.mail = (mail) => {
  if (!mail)
    return 'Email requis'
  else {
    let rgx = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    if (!rgx.test(String(mail).toLowerCase()) ||
    mail.length >= 50) {
      return 'Email non valide'
    } else {
      return false
    }
  }
}

exports.pass = (pass) => {
  if (!pass)
    return 'Mot de passe requis'
  else {
    let rgx = /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/
    if (!rgx.test(String(pass).toLowerCase())) {
      return 'Mot de passe non valide : 6 - 15 caractères / au moins un chiffre / au moins une lettre / pas de caractères spéciaux'
    } else {
      return false
    }
  }
}

exports.firstname = (name) => {
  if (!name)
    return 'Prénom requis'
  else {
    let rgx = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/
    if (!rgx.test(String(name).toLowerCase()) ||
    name.length >= 25) {
      return 'Prénom non valide'
    } else {
      return false
    }
  }
}

exports.name = (name) => {
  if (!name)
    return 'Nom requis'
  else {
    let rgx = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/
    if (!rgx.test(String(name).toLowerCase()) ||
    name.length >= 25) {
      return 'Nom non valide'
    } else {
      return false
    }
  }
}

exports.pseudo = (pseudo) => {
  if (!pseudo)
    return 'Pseudo requis'
  else {
    let rgx = /^[a-zA-Z0-9]+$/
    if (!rgx.test(String(pseudo).toLowerCase()) ||
    pseudo.length > 10 || pseudo.length < 2) {
      return 'Pseudo non valide : 2 - 10 caractéres / pas de caractères spéciaux'
    } else {
      return false
    }
  }
}

