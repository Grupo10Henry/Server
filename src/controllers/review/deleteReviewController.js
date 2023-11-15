
const {Review2} = require ("../../db")

const deleteReviewController = async (reviewID) => {
    const review = await Review2.findByPk(reviewID);
    
    if (!review) {
      throw new Error("Review not found");
    }
    
    await review.destroy();
    
    return { message: "Review deleted successfully" };
  };
  
  module.exports = { deleteReviewController };

