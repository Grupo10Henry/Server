const { Router } = require("express");

const contactFormRouter = Router();

contactFormRouter.get("/"); //Obtener todos los Form Cont
contactFormRouter.delete("/:id"); //Borrado lógico
contactFormRouter.post("/"); // crear FormCont
module.exports = contactFormRouter;
