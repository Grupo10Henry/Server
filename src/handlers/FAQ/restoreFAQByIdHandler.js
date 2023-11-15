const {
  restoreFAQById,
} = require("../../controllers/FAQ/restoreFAQByIdController");

const restoreFAQByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const restoredFAQ = await restoreFAQById(id);
    res.status(200).json(restoredFAQ);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Pregunta frecuente no encontrada" });
  }
};

module.exports = { restoreFAQByIdHandler };
