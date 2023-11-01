const { FrequentlyAskedQuestions } = require("../../db");

const updateFAQById = async (faqID, updatedData) => {
  const faq = await FrequentlyAskedQuestions.findByPk(faqID);

  if (!faq) {
    throw new Error("Pregunta frecuente no encontrada");
  }

  // Actualizar los campos proporcionados en updatedData
  await faq.update(updatedData);

  return faq;
};

module.exports = { updateFAQById };
