const users = require('../users')

exports.schema = (table_name) => {
  let sql = ''
  let table = ''
  switch (table_name) {
    case 'users':
      table = users
    break
  }
  for (val in table) {
    sql += val + ' ' + table[val] + ', '
  }
  sql = '(' + sql.replace(/, $/,')')
  return sql
}

exports.toInsert = (elements) => {
  let keys = ''
  let values = ''
  for (val in elements) {
    keys += val + ','
    values += "'" + elements[val] + "'" + ','
  }
  keys = '(' + keys.replace(/,$/, ')')
  values = '(' + values.replace(/,$/, ')')
  return [keys, values]
}

exports.multipleSet = (elements) => {
  let sets = ''
  for (val in elements) {
    sets += `${val}=${elements[val]},`
  }
  return sets.replace(/,$/, '')
}

exports.randomUserId = (pseudo) => {
  let text = ''
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  
  return text
}