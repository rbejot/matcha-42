exports.createTable = async (req, res) => {
  res.status(200).json({
    message: await req.app.get('db').createTable(req.body.table)
  })
}

exports.showTables = async (req, res) => {
  res.status(200).json({
    message: await req.app.get('db').showTables()
  })
}

exports.deleteTable = async (req, res) => {
  await req.app.get('db').deleteTable(req.body.table)
  res.status(201).json({
    message: `Table ${req.body.table} deleted`
  })
}