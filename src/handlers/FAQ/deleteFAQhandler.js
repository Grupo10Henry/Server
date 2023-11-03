const { deleteFAQById } = require("../../controllers/FAQ/deleteFAQcontroller");

const deleteFAQByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedFAQ = await deleteFAQById(id);
    res.status(200).json(deletedFAQ);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Pregunta frecuente no encontrada" });
  }
};

module.exports = { deleteFAQByIdHandler };
