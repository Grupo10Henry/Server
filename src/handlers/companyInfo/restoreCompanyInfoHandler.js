const {
  restoreCompanyInfoController,
} = require("../../controllers/companyInfo/restoreCompanyInfoController");

const restoreCompanyInfoHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const restoredCompanyInfo = await restoreCompanyInfoController(id);
    res.status(200).json(restoredCompanyInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { restoreCompanyInfoHandler };
