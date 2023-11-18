const {
  postUserBlockedController,
} = require("../../controllers/userBlocked/postUserBlockedController");

const postUserBlockedHandler = async (req, res, next) => {
  const { userID, email } = req.body;

  try {
    const newUserBlocked = await postUserBlockedController(userID, email);
    res.status(200).json(newUserBlocked);
  } catch (error) {
    next(error);
  }
};

module.exports = { postUserBlockedHandler };
