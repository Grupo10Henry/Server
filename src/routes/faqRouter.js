const { Router } = require("express");
const { postFAQHandler } = require("../handlers/FAQ/postFAQhandler");
const { getFAQHandler } = require("../handlers/FAQ/getFAQhandler");
const { getFAQByIdHandler } = require("../handlers/FAQ/getFAQidHandler");
const { deleteFAQByIdHandler } = require("../handlers/FAQ/deleteFAQhandler");
const { putFAQByIdHandler } = require("../handlers/FAQ/putFAQhandler");
const {
  restoreFAQByIdHandler,
} = require("../handlers/FAQ/restoreFAQByIdHandler");

const faqRouter = Router();


faqRouter.get("/", getFAQHandler); // Obtener todas las FAQ
faqRouter.get("/:id", getFAQByIdHandler); // Obtener FAQ por ID
faqRouter.delete("/:id", deleteFAQByIdHandler); // Borrado lógico
faqRouter.put("/:id", putFAQByIdHandler); // Editar por ID
faqRouter.put("/:id/restore", restoreFAQByIdHandler); // Ruta de restauración
faqRouter.post("/", postFAQHandler); // Crear FAQ

module.exports = faqRouter;
