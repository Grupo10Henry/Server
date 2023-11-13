//Pancho
const {
  googleLoginController,
} = require("../../controllers/loginController/googleLoginController");

const googleLoginHandler = async (req, res) => {
  const { token } = req.body;
  try {
    const loginData = await googleLoginController(token);
    res.json(loginData);
  } catch (error) {
    res.status(400).json({ error: error.message, stack: error.stack });
  }
};

module.exports = { googleLoginHandler };
