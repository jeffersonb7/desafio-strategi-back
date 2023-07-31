const { Router } = require("express")
const jwt = require("jsonwebtoken")
const router = Router()
const prisma = require('../db/prisma')
const bcrypt = require("bcryptjs")

const TIME_AUTHENTICATION = 3000

router.post('/login', async (req, res, next) => {
  if(!!req.body.username && !!req.body.password) {
    
    const data = {
      ...req.body,
    }

    const user = await prisma.usuario.findUnique(
      {
        where: {
          username: data.username
        }      
      }
    )

    const checkPassword = bcrypt.compareSync(data.password, user.password)

    if (!checkPassword) return res.status(403).json({message: 'Username ou senha inválidos!'})
    
    delete user.password
    const id = user.id
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: TIME_AUTHENTICATION
    })

    return res.status(200).json({ username: user.username , token });
  }
  return res.status(500).json({message: 'Username ou senha inválidos!'});
})

router.post('/create', async (req, res, next) => {
  const encryptedPassword = bcrypt.hashSync(req.body.password, 8);

  const data = {
    ...req.body,
    password: encryptedPassword
  }

  await prisma.usuario.create({data: data})

  res.status(200).json({message: 'Cadastrado com sucesso!'});
})

module.exports = router