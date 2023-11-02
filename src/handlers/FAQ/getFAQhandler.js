const { getAllFAQs } = require("../../controllers/FAQ/getFAQcontroller");

const getFAQHandler = async (req, res) => {
  try {
    const faqs = await getAllFAQs();
    res.status(200).json(faqs);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener las preguntas frecuentes" });
  }
};

module.exports = { getFAQHandler };
