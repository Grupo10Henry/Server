const { Router } = require("express");
const {getContactFormHandler} = require ("../handlers/contactForm/getContactFormHandler")
const {postContactFormHandler} = require ("../handlers/contactForm/postContactFormHandler")
const { deleteContactFormHandler } = require("../handlers/contactForm/deleteContactFormHandler")

const contactFormRouter = Router();

contactFormRouter.get("/", getContactFormHandler); //Obtener todos los Form Cont
contactFormRouter.delete("/:id", deleteContactFormHandler); //Borrado lógico
contactFormRouter.post("/", postContactFormHandler ); // crear FormCont
module.exports = contactFormRouter;
