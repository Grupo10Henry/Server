const { Review2 } = require("../../db");

const getUserEventReviewController = async (userID, eventID) => {
  const reviews = await Review2.findAll({
    where: { userID: userID, eventID: eventID },
  });
  return reviews;
};

module.exports = {
  getUserEventReviewController,
};
