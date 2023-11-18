const {
  deleteUserBlockedController,
} = require("../../controllers/userBlocked/deleteUserBlockedController");

const deleteUserBlockedHandler = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await deleteUserBlockedController(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteUserBlockedHandler };
