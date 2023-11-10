const { Router } = require("express");
const {
  placeOrder,
  succesfulPurchase,
} = require("../handlers/mercadoPago/mercadoPagoHandler");

const mainRouter = Router();

mainRouter.post("/order", placeOrder);
mainRouter.get("/success", succesfulPurchase);

module.exports = mainRouter;
