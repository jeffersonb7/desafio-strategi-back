const express = require('express')
const app = express()

const clientesRoute = require("./src/routes/clientesRoute")
const autenticacaoRoute = require("./src/routes/autenticacaoRoute")
const imovelRoute = require("./src/routes/imovelRoute")
const vendasRoute = require("./src/routes/vendasRoute")

app.use(express.json())

app.use("/clientes", clientesRoute)
app.use("/imovel", imovelRoute)
app.use("/auth", autenticacaoRoute)
app.use("/vendas", vendasRoute)

module.exports = app
