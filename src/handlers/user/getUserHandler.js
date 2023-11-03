// Eve
const {
  getUserController,
} = require("../../controllers/user/getUserController");
const getUserHandler = async (req, res) => {
  const { id } = req.query;
  try {
    const user = await getUserController(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getUserHandler,
};
