//Eve
const { CompanyInfo } = require("../../db");
const getCompanyInfoController = async () => {
  const infoDataBase = await CompanyInfo.findAll();
  return [...infoDataBase];
};
module.exports = {
  getCompanyInfoController,
};
