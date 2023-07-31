const jwtService = require("jsonwebtoken");

const middlewareValidarJWT = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']
  
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length)
  }

  if (!token) return res.status(401).json({auth: false, message: 'token não foi passado!'})

  jwtService.verify(token, process.env.SECRET, (err, user) => {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' })
    req.username = user.username
    next()
  })
}

module.exports = middlewareValidarJWT