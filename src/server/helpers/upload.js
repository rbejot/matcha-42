const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/server/public')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '.' +file.mimetype.split('/')[1])
  }
})

const fileFilter = async (req, file, cb) => {
  const type = file.mimetype.split('/')[0]
  if (type !== 'image')
    cb(new Error('Wrong file format'), false)
  else {
    const response = await req.app.get('db').find('user_id', req.decoded.id, 'pictures')
    if (response.length + 1 > 5)
      cb(new Error('Maximum number of pictures uploaded'), false)
    else
      cb(null, true)
  }
}

const upload = multer({
  storage: storage, 
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})

module.exports = upload