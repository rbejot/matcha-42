const users     = require('../users')
const pictures  = require('../pictures')
const tags      = require('../tags')
const interests = require('../interests')

exports.schema = (table_name) => {
  let sql = ''
  let table = ''
  switch (table_name) {
    case 'users':
      table = users
    break
    case 'pictures':
      table = pictures
    break
    case 'tags':
      table = tags
    break
    case 'interests':
      table = interests
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