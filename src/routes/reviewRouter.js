const { Router } = require("express");

const reviewRouter = Router();

reviewRouter.get("/"); //Obtener todos los comentarios
reviewRouter.delete("/:id"); //Borrado lógico
reviewRouter.post("/"); // crear comentario
module.exports = reviewRouter;
