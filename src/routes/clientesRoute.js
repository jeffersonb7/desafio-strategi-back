const { Router } = require("express");
const router = Router();
const middlewareValidarJWT = require('../middleware/middlewareValidarJWT')

router.get(
  "/",
  middlewareValidarJWT,
  (req, res, next) => {
      res.json(req.user);
  }
);

module.exports = router