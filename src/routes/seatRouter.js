const { Router } = require("express");

const seatRouter = Router();

seatRouter.get("/"); //Obtener todos los asientos
seatRouter.delete("/:id"); //Borrado lógico
seatRouter.put("/:id"); //Editar por Id (ocupado)
seatRouter.post("/"); // crear asientos
module.exports = seatRouter;
