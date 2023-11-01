const { FrequentlyAskedQuestions } = require("../../db");

const deleteFAQById = async (faqID) => {
  const faq = await FrequentlyAskedQuestions.findByPk(faqID);

  if (!faq) {
    throw new Error("Pregunta frecuente no encontrada");
  }

  await faq.destroy();

  return faq;
};

module.exports = { deleteFAQById };
