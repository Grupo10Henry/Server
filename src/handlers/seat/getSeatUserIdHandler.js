//Eve
const {
  getSeatUserIdController,
} = require("../../controllers/seat/getSeatUserIdController");

const getSeatUserIdHandler = async (req, res) => {
  try {
    const userID = req.params.id;

    const userSeats = await getSeatUserIdController(userID);

    res.status(200).json(userSeats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getSeatUserIdHandler };
