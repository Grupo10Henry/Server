const { Review2 } = require("../../db");

const getReviewController = async () => {
  const reviews = await Review2.findAll();
  return reviews;
};

module.exports = {
  getReviewController,
};
