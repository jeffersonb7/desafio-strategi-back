const prisma = require("../db/prisma");

const createVenda = async (req, res, next) => {

  const data = {...req.body}
  const user = await prisma.usuario.findFirst({where: {id: req.userId}})
  const imovel = await prisma.imovel.findFirst({where: {id: data.id_imovel }})
  const cliente = await prisma.cliente.findFirst({where: {id: data.id_cliente }})

  const venda = {
    usuario: { connect: { id: user.id }},
    id_imovel:  { connect: { id: imovel.id }},
    id_cliente:  { connect: { id: cliente.id }},
    comissao: data.comissao,
    condicaoPagamento: data.condicaoPagamento
  }

  const vendaCadastrada = await prisma.venda.create(
    {
      data: venda
    }
  )
    
  if (!vendaCadastrada) return res.status(500).json({ message: "Erro ao tentar cadastrar a venda!" })
  
  return res.json(vendaCadastrada);
}

module.exports = {
  createVenda
}