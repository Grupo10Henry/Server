const { FrequentlyAskedQuestions } = require("../../db");

const createFAQ = async (question, answer) => {
  const newFAQ = await FrequentlyAskedQuestions.create({
    question,
    answer,
  });

  return newFAQ;
};

module.exports = { createFAQ };
