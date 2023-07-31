const prisma = require("../db/prisma");

const getClientes = async (req, res, next) => {

  const data = await prisma.cliente.findMany()

  return res.json(data)
}

const getClienteById = async (req, res, next) => {

  const cliente = await prisma.cliente.findUnique(
    {
      where: {
        id: Number(req.params.id)
      }
    }
  )

  if (!cliente) return res.status(404).json({ message: "Não encontrado!" })

  return res.json(cliente)
}

const createCliente = async (req, res, next) => {

  const data = {...req.body}

  const cliente = await prisma.cliente.create(
    {
      data: data
    }
  )
    
  if (!cliente) return res.status(500).json({ message: "Erro ao tentar cadastrar cliente!" })
  
  return res.json(cliente);
}

const updateCliente = async (req, res, next) => {
  
  const data = req.body

  const cliente = await prisma.cliente.update(
    {
      data: data,
      where: {
        id: Number(req.params.id)
      }
    }
  )

  if (!cliente) return res.status(404).json({ message: "Não encontrado!" })

  return res.json(cliente)
}

const deleteCliente = async (req, res, next) => {
  res.json(req.user);
  
  const cliente = await prisma.cliente.delete({
    where: req.params.id
  })
  
  if (!cliente) return res.status(404).json({ message: "Não encontrado!" })

  return res.json(cliente)
}

module.exports = {
  getClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
}