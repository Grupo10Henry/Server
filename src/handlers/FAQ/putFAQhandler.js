const { updateFAQById } = require("../../controllers/FAQ/putFAQcontroller");

const putFAQByIdHandler = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedFAQ = await updateFAQById(id, updatedData);
    res.status(200).json(updatedFAQ);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Pregunta frecuente no encontrada" });
  }
};

module.exports = { putFAQByIdHandler };
