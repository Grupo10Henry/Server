const { Review2 } = require("../../db");

const postReviewController = async (
  userID,
  eventID,
  review,
  rating,
  reviewDate
) => {
  const newReview = await Review2.create({
    userID,
    eventID,
    review,
    rating,
    reviewDate,
  });
  return newReview;
};
module.exports = { postReviewController };
