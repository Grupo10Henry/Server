const { FrequentlyAskedQuestions } = require("../../db");

const getFAQById = async (faqID) => {
  const faq = await FrequentlyAskedQuestions.findByPk(faqID);
  if (!faq) {
    // Si no se encuentra la FAQ, puedes manejarlo como desees.
    throw new Error("Pregunta frecuente no encontrada");
  }

  return faq;
};

module.exports = { getFAQById };
