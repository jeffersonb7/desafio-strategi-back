const { Router } = require("express");
const router = Router();
const middlewareValidarJWT = require('../middleware/middlewareValidarJWT');

const controllerCliente = require('../controllers/clientesController') 

router.get("/", middlewareValidarJWT, controllerCliente.getClientes);
router.get("/:id", middlewareValidarJWT, controllerCliente.getClienteById);
router.post("/", middlewareValidarJWT, controllerCliente.createCliente);
router.put("/:id", middlewareValidarJWT, controllerCliente.updateCliente);
router.delete("/:id", middlewareValidarJWT, controllerCliente.deleteCliente);

module.exports = router