const { Router } = require("express");
const {
  postPaystubHandler,
} = require("../handlers/paystub/postPaystubHandler");
const {
  getPaystubsHandler,
} = require("../handlers/paystub/getPaystubsHandler");
const {
  getPaystubsIdHandler,
} = require("../handlers/paystub/getPaystubIdHandler");

const paystubRouter = Router();

paystubRouter.get("/", getPaystubsHandler); //Obtener todos los paystubs
paystubRouter.get("/:id", getPaystubsIdHandler);
paystubRouter.post("/", postPaystubHandler); // crear paystub
module.exports = paystubRouter;
