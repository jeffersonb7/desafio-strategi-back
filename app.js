const express = require('express')
const app = express()
const clientesRoute = require("./src/routes/clientesRoute")
const autenticacaoRoute = require("./src/routes/autenticacaoRoute")

app.use(express.json())

app.use("/clientes", clientesRoute)
app.use("/auth", autenticacaoRoute)

module.exports = app


// app.get(
//   "/status",
//   (req, res) => {
//       const jwt = req.headers['authorization'];

//       res.json({
//           status: "OK",
//           jwt
//       });
//   }
// );

// app.post(
//   "/login",
//   (req, res) => {
//       const { usuario, senha } = req.body;

//       if (usuario === "marcelo" && senha === "123456") {
//           const jwt = require("jsonwebtoken");
//           const dadosUsuario = {
//               nome: "marcelo",
//               email: "teste@gmail.com",
//               id: 1
//           };

//           const chavePrivada = "consolelog.com.br";

//           jwt.sign(dadosUsuario, chavePrivada, (err, token) => {
//               if (err) {
//                   res
//                       .status(500)
//                       .json({ mensagem: "Erro ao gerar o JWT" });

//                   return;
//               }

//               res.set("x-access-token", token);
//               res.end();
//           });
//       } else {
//           res.status(401);
//     res.end();
//       }
//   }
// );



// app.get(
//   "/fotos",
//   middlewareValidarJWT,
//   (req, res) => {
//       const { id } = req.userInfo;
//       res.json({ dados: `Fotos do usuário de id: ${id}` });
//   }
// );

// app.listen(3000, () => {
// console.log("Aplicacao em execucao");
// });
