const { Review } = require("../../db");

const postReviewController = async (
  userID,
  eventID,
  review,
  rating,
  reviewDate
) => {
  const newReview = await Review.create({
    userID,
    eventID,
    review,
    rating,
    reviewDate,
  });
  return newReview;
};

module.exports = { postReviewController };
