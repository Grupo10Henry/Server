const { Review } = require("../../db");

const postReviewController = async (
    userID, 
    eventID, 
    paystubID, 
    review, 
    rating, 
    reviewDate) => {
  const newReview = await Review.create({
    userID,
    eventID,
    paystubID,
    review,
    rating,
    reviewDate
  });
  return newReview;
};

module.exports = { postReviewController };