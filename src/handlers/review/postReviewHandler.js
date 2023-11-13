const {
  postReviewController,
} = require("../../controllers/review/postReviewController");

const postReviewHandler = async (req, res) => {
  const { userID, eventID, review, rating, reviewDate } = req.body;

  try {
    const newReview = await postReviewController(
      userID,
      eventID,
      review,
      rating,
      reviewDate
    );
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postReviewHandler };
