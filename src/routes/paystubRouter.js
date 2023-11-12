const { Router } = require("express");
const {
  postPaystubHandler,
} = require("../handlers/paystub/postPaystubHandler");
const {
  getPaystubsHandler,
} = require("../handlers/paystub/getPaystubsHandler");
const {
  generateQRCodeHandler,
} = require("../handlers/paystub/generateQRCodeHandler");
const {
  getPaystubByDateHandler,
} = require("../handlers/paystub/getPaystubByDateHandler");

const paystubRouter = Router();

paystubRouter.get("/", getPaystubsHandler); //Obtener todos los paystubs
paystubRouter.post("/", postPaystubHandler); // crear paystub
paystubRouter.get("/qrcode/:paystubID", generateQRCodeHandler); // generar   qr
paystubRouter.get("/:year/:month", getPaystubByDateHandler);

module.exports = paystubRouter;
