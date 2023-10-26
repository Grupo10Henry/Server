const { Router } = require("express");

const companyInfoRouter = Router();

companyInfoRouter.get("/"); //Obtener toda la info
companyInfoRouter.delete("/:id"); //Borrado lógico
companyInfoRouter.put("/:id"); //Editar por Id
companyInfoRouter.post("/"); // crear info
module.exports = companyInfoRouter;
