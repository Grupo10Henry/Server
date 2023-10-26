const { Router } = require("express");

const faqRouter = Router();

faqRouter.get("/"); //Obtener todas las faq
faqRouter.delete("/:id"); //Borrado lógico
faqRouter.put("/:id"); //Editar por Id
faqRouter.post("/"); // crear faq
module.exports = faqRouter;
