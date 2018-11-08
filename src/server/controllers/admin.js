// adminDb = (req) => {
//   switch (Object.keys(req.body)[1]) {
//     case 'create_table':
//       return req.app.get('db').createTable(req.body.create_table)
//     case 'delete_table':
//       return req.app.get('db').deleteTable(req.body.delete_table)
//     case 'show_tables':
//       return req.app.get('db').showTables()
//   }
// }

exports.createTable = async (req, res) => {
  try {
    res.status(201).json({
      message: await req.app.get('db').createTable(req.body.table)
    })
  } catch (err) {
    res.status(403).json({
      error: err
    })
  }
}

exports.showTables = async (req, res) => {
  try {
    res.status(201).json({
      message: await req.app.get('db').showTables()
    })
  } catch (err) {
    res.status(403).json({
      error: err
    })
  }
}

exports.deleteTable = async (req, res) => {
  try {
    res.status(201).json({
      message: req.app.get('db').deleteTable(req.body.table)
    })
  } catch (err) {
    res.status(403).json({
      error: err
    })
  }
}