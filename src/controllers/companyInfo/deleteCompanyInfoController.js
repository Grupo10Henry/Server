//Eve
const { CompanyInfo } = require("../../db");

const deleteCompanyInfoController = async (infoId) => {
  const info = await CompanyInfo.findByPk(infoId);
  console.log(info);
  if (!info) {
    throw new Error("Información no encontrada");
  }
  CompanyInfo.destroy({
    where: {
      companyInfoID: infoId, // ID de la companyInfo que deseas eliminar lógicamente
    },
  });
  return info;
};

module.exports = {
  deleteCompanyInfoController,
};
