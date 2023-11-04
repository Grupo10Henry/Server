// Eve
const {
  getUserController,
} = require("../../controllers/user/getUserController");
const getUserHandler = async (req, res) => {
  try {
    const user = await getUserController();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getUserHandler,
};
