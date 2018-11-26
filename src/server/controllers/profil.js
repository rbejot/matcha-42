exports.getProfil = async (req, res) => {
  res.status(200).json({
    profil: req.decoded.profil
  })
}

exports.updateProfil = async (req, res) => {
  res.status(200).json({
    message: await convertImage(img)
  })
}