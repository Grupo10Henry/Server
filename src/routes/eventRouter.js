//Eve
const { Router } = require("express");
const { getEventHandler } = require("../handlers/event/getEventHandler");
const { getIdEventHandler } = require("../handlers/event/getIdEventHandler");
const {
  getPreviusEventHandler,
} = require("../handlers/event/getPreviusEventHandler");
const {
  getNextEventHandler,
} = require("../handlers/event/getNextEventHandler");
const { postEventHandler } = require("../handlers/event/postEventHandler");
const { putIDEventHandler } = require("../handlers/event/putIDEventHandler");
const { deleteEventHandler } = require("../handlers/event/deleteEventHandler");
const {
  putViewEventHandler,
} = require("../handlers/event/putViewEventHandler");
const eventRouter = Router();

eventRouter.get("/", getEventHandler); //Obtener todos los eventos
eventRouter.get("/next", getNextEventHandler); //Obtener proximos eventos ordenados
eventRouter.get("/previus", getPreviusEventHandler); // Obetener eventos caducados
eventRouter.get("/:id", getIdEventHandler); //Obtener evento por ID
eventRouter.delete("/:id", deleteEventHandler); //Borrado lógico
eventRouter.put("/:id", putIDEventHandler); //Editar por Id (Admin)
eventRouter.put("/views/:id", putViewEventHandler); //Editar views (onClick User)
eventRouter.post("/", postEventHandler); // crear evento
module.exports = eventRouter;
