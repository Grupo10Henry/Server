const {
  getUserBlockedController,
} = require("../../controllers/userBlocked/getUserBlockedController");

const getUserBlockedHandler = async (req, res) => {
  const { email } = req.query;
  try {
    const blocked = await getUserBlockedController(email);
    res.status(200).json(blocked);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUserBlockedHandler };
