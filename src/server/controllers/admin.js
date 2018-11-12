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