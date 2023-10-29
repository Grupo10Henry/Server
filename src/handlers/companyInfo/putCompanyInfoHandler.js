//Eve
const {
  putCompanyInfoController,
} = require("../../controllers/companyInfo/putCompanyInfoController");
const putCompanyInfoHandler = async (req, res) => {
  const companyInfoId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedInfo = await putCompanyInfoController(
      companyInfoId,
      updatedData
    );
    res.status(200).json(updatedInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putCompanyInfoHandler,
};
