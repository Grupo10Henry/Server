// Eve
const {
  getCompanyInfoController,
} = require("../../controllers/companyInfo/getCompanyInfoController");
const getCompanyInfoHandler = async (req, res) => {
  try {
    const info = await getCompanyInfoController();
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getCompanyInfoHandler,
};
