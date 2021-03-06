const Token = require('../helpers/token')
const token = new Token()

exports.checkToken = async (userToken) => {
  try {
    const decoded = await token.decode(userToken)
    const currentTime = new Date() / 1000
    if (currentTime >= decoded.exp) throw 'Token expired'
    return decoded
  } catch (err) {
    throw err
  }
}

exports.mail = (mail) => {
  if (!mail)
    return '[mail] required'
  else {
    let rgx = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    if (!rgx.test(String(mail).toLowerCase()) ||
    mail.length >= 50) {
      return 'Unvalid [mail]'
    } else {
      return false
    }
  }
}

exports.tag = (tag) => {
  const rgx = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/
  if (!rgx.test(String(tag).toLowerCase()) || tag.length >= 25 || tag.length <= 3)
    return `${tag} is not valid : less than 3 or more than 25 characters or not allowed characters`
  return false
}

exports.pass = (pass) => {
  if (!pass)
    return '[password] required'
  else {
    let rgx = /^(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/
    if (!rgx.test(String(pass).toLowerCase())) {
      return 'Unvalid [password] : 6 - 15 characters / at leat one number / at least one letter / special characters non allowed'
    } else {
      return false
    }
  }
}

exports.firstname = (name) => {
  if (!name)
    return '[firstname] required'
  else {
    let rgx = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/
    if (!rgx.test(String(name).toLowerCase()) ||
    name.length >= 25) {
      return 'Unvalid [firstname]'
    } else {
      return false
    }
  }
}

exports.name = (name) => {
  if (!name)
    return '[name] required'
  else {
    let rgx = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/
    if (!rgx.test(String(name).toLowerCase()) ||
    name.length >= 25) {
      return 'Unvalid [name]'
    } else {
      return false
    }
  }
}

exports.pseudo = (pseudo) => {
  if (!pseudo)
    return '[pseudo] required'
  else {
    let rgx = /^[a-zA-Z0-9]+$/
    if (!rgx.test(String(pseudo).toLowerCase()) ||
    pseudo.length > 10 || pseudo.length < 3) {
      return 'Unvalid [pseudo] : 2 - 10 characters / special characters not allowed'
    } else {
      return false
    }
  }
}

// sexe = 1 = man
// sexe = 2 = woman
// sexe = 3 = transgender
exports.gender = (sexe) => {
  if (sexe.length > 1)
    return 'Invalid [gender]'
  sexe = parseInt(sexe)
  if (Number.isInteger(sexe)) {
    if (sexe !== 1 && sexe !== 2 && sexe !== 3)
      return 'Invalid [gender]'
    else
      return false
  } else {
    return '[gender] must be an int'
  }
}


// orientation = 1 = heterosexual
// orientation = 2 = homosexual
// orientation = 3 = bisexual
exports.orientation = (sexual_orientation) => {
  if (sexual_orientation.length > 1)
    return 'Invalid [sexual_orientation]'
  sexual_orientation = parseInt(sexual_orientation)
  if (Number.isInteger(sexual_orientation)) {
    if (sexual_orientation !== 1 && sexual_orientation !== 2 && sexual_orientation !== 3)
      return 'Invalid [sexual_orientation]'
    else
      return false
  } else {
    return '[sexual_orientation] must be an int'
  }
}


exports.age = (age) => {
  if (age.length > 2)
    return 'Invalid [age]'
  age = parseInt(age)
  if (Number.isInteger(age)) {
    if (age < 18 || age >= 100)
      return 'Invalid [age]'
    else
      return false
  } else {
    return '[age] must be an int'
  }
}


exports.bio = (text) => {
  if (text.length < 6)
    return '[bio] is too short'
  if (text.length > 257)
    return '[bio] is too long'
  return false
}