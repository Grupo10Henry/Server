//Eve
const { CompanyInfo } = require("../../db");

const putCompanyInfoController = async (companyInfoId, updatedData) => {
  const existingInfo = await CompanyInfo.findByPk(companyInfoId);

  if (!existingInfo) {
    throw new Error("Información no encontrada");
  }

  // Actualiza los campos proporcionados en updatedData
  await existingInfo.update(updatedData);

  return existingInfo;
};

module.exports = { putCompanyInfoController };
