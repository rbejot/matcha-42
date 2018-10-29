const mysql = require('mysql')
const users = require('./users')

schema = () => {
  let sql = ''
  for (val in users) {
    sql += val + ' ' + users[val] + ', '
  }
  sql = '(' + sql.replace(/, $/,')')
  return sql
}

toInsert = (elements) => {
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

randomUserId = () => {
  let text = ''
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}

module.exports = class Db {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'db',
      user: 'rbejot',
      password: 'rbejot',
      database: 'matcha'
    })
    this.connection.connect()
  }

  test() {
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT 1 + 1 AS solution', (err, result) => {
        if (err) reject(err)
        else resolve(result[0].solution)
      })
    })
  }

  deleteTable(name) {
    return new Promise((resolve, reject) => {
      this.connection.query(`DROP TABLE IF EXISTS ${name}`, (err) => {
        if (err) reject(err)
        else resolve(`Table ${name} deleted`)
      })
    })
  }

  createTable(name) {
    return new Promise((resolve, reject) => {
      this.connection.query(`CREATE TABLE IF NOT EXISTS ${name} ${schema()}`, (err, res) => {
        if (err) reject(err)
        else resolve(`Table ${name} created`)
      })
    })
  }

  showTables() {
    return new Promise((resolve, reject) => {
      this.connection.query('SHOW TABLES', (err, res) => {
        if (err || res.length === 0) reject(err || 'No tables found')
        else resolve(res[0].Tables_in_matcha)
      })
    })
  }

  async createUser(elements) {
    let user_exist = await this.findByMany('pseudo', 'mail', elements.pseudo, elements.mail, 'users')
    if (user_exist.length !== 0)
      throw new Error('User already exists')
    return new Promise((resolve, reject) => {
      elements.id = randomUserId()
      let keys = toInsert(elements)[0]
      let values = toInsert(elements)[1]
      this.connection.query(`INSERT INTO users ${keys} VALUES ${values}`, (err, res) => {
        if (err) reject(err)
        else resolve(elements)
      })
    })
  }

  findByMany(row1, row2, field1, field2 ,table) {
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT * FROM ${table} WHERE ${row1} = '${field1}' OR ${row2} = '${field2}'`, (err, res) => {
        if (err) reject(err)
        else resolve(res)  
      })
    })
  }

  findByOne(row, field, table) {
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT * FROM ${table} WHERE ${row} = ${mysql.escape(field)}`, (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
    })
  }

  findByTwo(row1, row2, field1, field2 ,table) {
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT * FROM ${table} WHERE ${row1} = '${field1}' AND ${row2} = '${field2}'`, (err, res) => {
        if (err) reject(err)
        else resolve(res)  
      })
    })
  }

}