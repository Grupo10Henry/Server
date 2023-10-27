const { Router } = require("express");

const eventRouter = Router();

eventRouter.get("/"); //Obtener todos los eventos
eventRouter.delete("/:id"); //Borrado lógico
eventRouter.put("/:id"); //Editar por Id (Admin)
eventRouter.put("/"); //Editar views (onClick User)
eventRouter.post("/"); // crear evento
module.exports = eventRouter;
