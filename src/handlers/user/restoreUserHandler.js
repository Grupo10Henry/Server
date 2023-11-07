const {
  restoreUserController,
} = require("../../controllers/user/restoreUserController");

const restoreUserHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const restoredUser = await restoreUserController(id);
    res.status(200).json(restoredUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { restoreUserHandler };
