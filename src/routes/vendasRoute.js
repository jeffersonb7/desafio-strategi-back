const { Router } = require("express");
const router = Router();
const middlewareValidarJWT = require('../middleware/middlewareValidarJWT');

const vendasController = require('../controllers/vendasController') 

router.post("/", middlewareValidarJWT, vendasController.createVenda);

module.exports = router