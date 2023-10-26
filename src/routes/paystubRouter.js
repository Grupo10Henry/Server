const { Router } = require("express");

const paystubRouter = Router();

paystubRouter.get("/"); //Obtener todos los paystubs
paystubRouter.post("/"); // crear paystub
module.exports = paystubRouter;
