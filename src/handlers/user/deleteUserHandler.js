//Eve
const {
  deleteUserController,
} = require("../../controllers/user/deleteUserController");

const deleteUserHandler = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await deleteUserController(userId);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteUserHandler,
};
