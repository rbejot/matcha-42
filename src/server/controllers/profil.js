exports.getProfil = async (req, res) => {
    res.status(200).json({
        message: req.decoded.profil
    })
}