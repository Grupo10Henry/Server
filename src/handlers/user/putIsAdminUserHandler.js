//Eve
const {
  putIsAdminUserController,
} = require("../../controllers/user/putIsAdminUserController");

const putIsAdminUserHandler = async (req, res) => {
  const userId = req.params.id;
  const data = req.query;

  try {
    const isAdmin = await putIsAdminUserController(userId, data);
    res.status(200).json(isAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putIsAdminUserHandler,
};
