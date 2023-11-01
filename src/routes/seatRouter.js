const { Router } = require("express");
const { postSeatHandler } = require("../handlers/seat/postSeatHandler");
const { getSeatHandler } = require("../handlers/seat/getSeatHandler");
const {
  getSeatByEventHandler,
} = require("../handlers/seat/getSeatByEventHandler");

const seatRouter = Router();

seatRouter.get("/:id", getSeatHandler); //Obtener todos los asientos
seatRouter.get("/:eventID/:sector", getSeatByEventHandler); // obtener asientos por eventID y sector
seatRouter.delete("/:id"); //Borrado lógico
seatRouter.put("/:id"); //Editar por Id (ocupado)
seatRouter.post("/", postSeatHandler); // crear asientos
module.exports = seatRouter;
