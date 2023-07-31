const jwt = require("jsonwebtoken");

function middlewareValidarJWT(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization']

  if (!token) return res.status(401).json({ auth: false, message: 'Nenhum token foi passado.' });

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length)
  }

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Falha ao verificar token.' });

    req.userId = decoded.id;
    next();
  });
}

module.exports = middlewareValidarJWT