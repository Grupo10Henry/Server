const { Router } = require("express");

const eventRouter = Router();

eventRouter.get("/date"); //Obtener eventos por fecha
eventRouter.get("/views"); //Obtener eventos por cant de vistas
eventRouter.get("/"); //Obtener todos los eventos
eventRouter.delete("/:id"); //Borrado lógico
eventRouter.put("/:id"); //Editar por Id (Admin)
eventRouter.put("/views"); //Editar views (onClick User)
eventRouter.post("/"); // crear evento
module.exports = eventRouter;
