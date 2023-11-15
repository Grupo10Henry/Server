//Eve
const { Router } = require("express");
const {
  postCompanyInfoHandler,
} = require("../handlers/companyInfo/postCompanyInfoHandler");
const {
  getCompanyInfoHandler,
} = require("../handlers/companyInfo/getCompanyInfoHandler");
const {
  putCompanyInfoHandler,
} = require("../handlers/companyInfo/putCompanyInfoHandler");
const {
  deleteCompanyInfoHandler,
} = require("../handlers/companyInfo/deleteCompanyInfoHandler");
const {
  restoreCompanyInfoHandler,
} = require("../handlers/companyInfo/restoreCompanyInfoHandler");

const companyInfoRouter = Router();

companyInfoRouter.get("/", getCompanyInfoHandler); //Obtener toda la info
companyInfoRouter.delete("/:id", deleteCompanyInfoHandler); //Borrado lógico
companyInfoRouter.put("/:id", putCompanyInfoHandler); //Editar por Id
companyInfoRouter.post("/", postCompanyInfoHandler); // crear info
companyInfoRouter.put("/:id/restore", restoreCompanyInfoHandler);

module.exports = companyInfoRouter;
