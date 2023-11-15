

const {
  restoreUserController,
} = require("../../controllers/user/restoreUserController");

const restoreUserHandler = async (req, res) => {

  const userId = req.params.id;
  try {
    const restoredUser = await restoreUserController(userId);

    res.status(200).json(restoredUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  restoreUserHandler,
};

