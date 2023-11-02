// Eve
const {
  postCompanyInfoController,
} = require("../../controllers/companyInfo/postCompanyInfoController");

const postCompanyInfoHandler = async (req, res) => {
  const { email, phone, adress, businessHours, dataPolicy } = req.body;
  try {
    const info = await postCompanyInfoController(
      email,
      phone,
      adress,
      businessHours,
      dataPolicy
    );
    res.status(200).json(info);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  postCompanyInfoHandler,
};
