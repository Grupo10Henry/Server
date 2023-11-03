const { getFAQById } = require("../../controllers/FAQ/getFAQidController");

const getFAQByIdHandler = async (req, res) => {
  const { faqID } = req.params;

  try {
    const faq = await getFAQById(faqID);
    res.status(200).json(faq);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Pregunta frecuente no encontrada" });
  }
};

module.exports = { getFAQByIdHandler };
