exports.getProfil = async (req, res) => {
  res.status(200).json({
    id: req.decoded.id,
    profil: req.decoded.profil
  })
}

exports.updateProfil = async (req, res) => {
  
  res.status(200).json({
    message: 'Profil update success'
  })
}