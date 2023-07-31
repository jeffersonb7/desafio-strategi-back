const prisma = require("../db/prisma");

const getImovel = async (req, res, next) => {

  const data = await prisma.imovel.findMany()

  return res.json(data)
}

module.exports = {
  getImovel, 
}