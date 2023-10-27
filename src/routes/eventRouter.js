const { Router } = require("express");
//const { getEventHandler } = require("../handlers/event/getEventHandler");
const { postEventHandler } = require("../handlers/event/postEventHandler");
const eventRouter = Router();

//eventRouter.get("/", getEventHandler); //Obtener todos los eventos
eventRouter.delete("/:id"); //Borrado lógico
eventRouter.put("/:id"); //Editar por Id (Admin)
eventRouter.put("/"); //Editar views (onClick User)
eventRouter.post("/", postEventHandler); // crear evento
module.exports = eventRouter;
