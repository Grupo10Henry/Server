const {
  deleteCompanyInfoController,
} = require("../../controllers/companyInfo/deleteCompanyInfoController");

const deleteCompanyInfoHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedInfo = await deleteCompanyInfoController(id);
    res
      .status(200)
      .json({ message: "Información eliminada exitosamente", deletedInfo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la información" });
  }
};

module.exports = { deleteCompanyInfoHandler };
