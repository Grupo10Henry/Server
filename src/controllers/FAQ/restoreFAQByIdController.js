const { FrequentlyAskedQuestions } = require("../../db");

const restoreFAQById = async (id) => {
  const faq = await FrequentlyAskedQuestions.findByPk(id, {
    paranoid: false,
  });

  if (!faq) {
    throw new Error("Pregunta frecuente no encontrada");
  }

  // Restaurar la FAQ estableciendo deletedAt a null
  await faq.restore();

  return faq;
};

module.exports = { restoreFAQById };
