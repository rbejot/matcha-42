const users = require('../users')
const pictures = require('../pictures')

exports.schema = (table_name) => {
  let sql = ''
  let table = ''
  switch (table_name) {
    case 'users':
      table = users
    case 'pictures':
      table = pictures
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
    sets += `${val}="${elements[val]}",`
  }
  return sets.replace(/,$/, '')
}