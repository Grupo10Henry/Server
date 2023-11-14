const {
  getUserEventReviewController,
} = require("../../controllers/review/getUserEventReviewController");

const getUserEventReviewHandler = async (req, res) => {
  try {
    const { userID, eventID } = req.params;
    const reviews = await getUserEventReviewController(userID, eventID);
    if (reviews.length > 0) {
      res.status(200).json(reviews);
    } else {
      res.status(400).json({ message: "No hay reseñas encontradas" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserEventReviewHandler,
};
