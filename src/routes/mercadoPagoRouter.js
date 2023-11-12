const { Router } = require("express");
const {
  placeOrder,
  succesfulPurchase,
  webhook,
} = require("../handlers/mercadoPago/mercadoPagoHandler");

const mainRouter = Router();

mainRouter.post("/order", placeOrder);
mainRouter.get("/success", succesfulPurchase);
mainRouter.post("/webhook", webhook);

module.exports = mainRouter;
