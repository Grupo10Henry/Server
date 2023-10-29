//Eve
const {
  deleteCompanyInfoController,
} = require("../../controllers/companyInfo/deleteCompanyInfoController");

const deleteCompanyInfoHandler = async (req, res) => {
  const infoId = req.params.id;
  try {
    const deletedInfo = await deleteCompanyInfoController(infoId);
    res.status(200).json(deletedInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteCompanyInfoHandler,
};
