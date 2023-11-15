const { CompanyInfo } = require("../../db");

const restoreCompanyInfoController = async (id) => {
  const info = await CompanyInfo.findByPk(id, { paranoid: false });

  if (!info) {
    throw new Error("Información no encontrada");
  }

  // Restaurar la CompanyInfo estableciendo deletedAt a null
  await info.restore();

  return info;
};

module.exports = { restoreCompanyInfoController };
