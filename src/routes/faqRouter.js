const { Router } = require("express");
const { postFAQHandler } = require("../handlers/FAQ/postFAQhandler");
const { getFAQHandler } = require("../handlers/FAQ/getFAQhandler");
const { getFAQByIdHandler } = require("../handlers/FAQ/getFAQidHandler");
const { deleteFAQByIdHandler } = require("../handlers/FAQ/deleteFAQhandler");
const { putFAQByIdHandler } = require("../handlers/FAQ/putFAQhandler");

const faqRouter = Router();

faqRouter.get("/", getFAQHandler); //Obtener todas las faq
faqRouter.get("/:id", getFAQByIdHandler); //obtener faq por id
faqRouter.delete("/:id", deleteFAQByIdHandler); //Borrado lógico
faqRouter.put("/:id", putFAQByIdHandler); //Editar por Id
faqRouter.post("/", postFAQHandler); // crear faq
module.exports = faqRouter;
