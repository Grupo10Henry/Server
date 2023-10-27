const { deleteReviewController } = require("../../controllers/review/deleteReviewController");

const deleteReviewHandler = async (req, res) => {
  const { reviewID } = req.params;  
  
  try {
    const result = await deleteReviewController(reviewID);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteReviewHandler,
};