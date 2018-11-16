exports.checkAuth = async (req, res) => {
    const response = await res.app.get('db').findByOne('id', req.decoded.id, 'users')
    res.status(200).json({
      message: `Authorized access for user ${response[0].pseudo}`
    })
}