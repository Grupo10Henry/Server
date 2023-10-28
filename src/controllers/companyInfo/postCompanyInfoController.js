//eve
const { CompanyInfo } = require("../../db");

const postCompanyInfoController = async (
  email,
  phone,
  adress,
  businessHours,
  dataPolicy
) => {
  const newCompanyInfo = await CompanyInfo.create({
    email,
    phone,
    adress,
    businessHours,
    dataPolicy,
  });

  return newCompanyInfo;
};

module.exports = { postCompanyInfoController };
