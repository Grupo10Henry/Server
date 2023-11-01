const { FrequentlyAskedQuestions } = require("../../db");

const getAllFAQs = async () => {
  const faqs = await FrequentlyAskedQuestions.findAll();
  return faqs;
};

module.exports = { getAllFAQs };
