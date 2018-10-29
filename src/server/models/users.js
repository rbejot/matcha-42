module.exports = users = {
  'id': 'VARCHAR(10) PRIMARY KEY',
  'pseudo': 'VARCHAR(10)',
  'name': 'VARCHAR(25)',
  'firstname': 'VARCHAR(25)',
  'mail': 'VARCHAR(50)',
  'password': 'VARCHAR(128)',
  'gender': 'INT(1)',
  'profil_picture': 'VARCHAR(258)',
  'sexual_orientation': 'INT(1)',
  'bio': 'VARCHAR(258)',
  'location': 'VARCHAR(258)',
  'create_date': 'TIMESTAMP'
}