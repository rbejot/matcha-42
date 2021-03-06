const mysql = require('mysql')
const utils = require('./utils')

module.exports = class Db {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
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
      this.connection.query(`DROP TABLE IF EXISTS ${name}`, (err, res) => {
        if (err) reject(err)
        else resolve(`Table ${name} deleted`)
      })
    })
  }

  createTable(name) {
    console.log(`Create table : ${name}`)
    return new Promise((resolve, reject) => {
      this.connection.query(`CREATE TABLE IF NOT EXISTS ${name} ${utils.schema(name)}`, (err, res) => {
        if (err) reject(err)
        else resolve(`Table ${name} created`)
      })
    })
  }

  showTable(table, select) {
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT ${select} FROM ${table}`, (err, res) => {
        if (err) reject(err)
        else resolve(res)
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

  insertEntry(elements, table) {
    return new Promise((resolve, reject) => {
      let insert = utils.toInsert(elements)
      let keys = insert[0]
      let values = insert[1]
      this.connection.query(`INSERT INTO ${table} ${keys} VALUES ${values}`, (err, res) => {
        if (err) reject(`Error in inserting element in database: ${err}`)
        else {
          resolve({
            message: `Element inserted in table ${table}`
          })
        }
      })
    })
  }

  async createUser(elements) {
    let user_exist = await this.find('pseudo', elements.pseudo, 'users')
    if (user_exist.length !== 0)
      throw `${elements.pseudo} already exists`
    user_exist = await this.find('mail', elements.mail, 'users')
    if (user_exist.length !== 0)
      throw `${elements.mail} already exists`
    return new Promise((resolve, reject) => {
      let insert = utils.toInsert(elements)
      let keys = insert[0]
      let values = insert[1]
      this.connection.query(`INSERT INTO users ${keys} VALUES ${values}`, (err, res) => {
        if (err) reject(`Error in inserting user in database : ${err}`)
        else {
          resolve({
            message: `User  ${elements.pseudo} crée`,
            confirmation: elements.confirmation_code,
            firstname: elements.firstname
          })
        }
      })
    })
  }

  findByMany(row1, row2, field1, field2, table) {
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT * FROM ${table} WHERE ${row1} = '${field1}' OR ${row2} = '${field2}'`, (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
    })
  }

  find(row, field, table) {
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT * FROM ${table} WHERE ${row} = ${mysql.escape(field)}`, (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
    })
  }

  delete(row1, row2, field1, field2, table) {
    return new Promise((resolve, reject) => {
      this.connection.query(`DELETE FROM ${table} WHERE ${row1} = ${mysql.escape(field1)} AND ${row2} = ${mysql.escape(field2)}`, (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
    })
  }

  findByOne(row, field, table) {
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT * FROM ${table} WHERE ${row} = ${mysql.escape(field)}`, (err, res) => {
        if (err || res.length == 0) reject(err || 'No entry found')
        else resolve(res)
      })
    })
  }

  findByTwo(row1, row2, field1, field2, table) {
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT * FROM ${table} WHERE ${row1} = ${mysql.escape(field1)} AND ${row2} = ${mysql.escape(field2)}`, (err, res) => {
        if (err) reject(err)
        else if (res.length === 0) reject('Entry not find')
        else resolve(res)
      })
    })
  }

  updateEntry(elements, row, field, table) {
    const sets = utils.multipleSet(elements)
    return new Promise((resolve, reject) => {
      this.connection.query(`UPDATE ${table} SET ${sets} WHERE ${row}="${field}"`, (err, res) => {
        if (err) reject(err)
        else resolve(res)
      })
    })
  }

}