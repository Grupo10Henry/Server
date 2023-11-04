// Eve
const {
  getIdUserController,
} = require("../../controllers/user/getIdUserController");
const getIdUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getIdUserController(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getIdUserHandler,
};
