const { Router } = require("express");
const router = Router();
const middlewareValidarJWT = require('../middleware/middlewareValidarJWT');

const controllerImovel = require('../controllers/imovelController') 

router.get("/", middlewareValidarJWT, controllerImovel.getImovel);

module.exports = router