const { CompanyInfo } = require("../../db");

const deleteCompanyInfoController = async (infoId) => {
  const info = await CompanyInfo.findByPk(infoId);
  console.log(info);
  if (!info) {
    throw new Error("Información no encontrada");
  }


  // Eliminar la CompanyInfo lógicamente
  await info.destroy();


  return info;
};

module.exports = {
  deleteCompanyInfoController,
};
