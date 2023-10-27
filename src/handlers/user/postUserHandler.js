// Eve
const {
  postUserController,
} = require("../../controllers/user/postUserController");
const postUserHandler = async (req, res) => {
  const { isAdmin, name, lastName, email, phone, password, identityCard, dob } =
    req.body;
  try {
    const user = await postUserController(
      isAdmin,
      name,
      lastName,
      email,
      phone,
      password,
      identityCard,
      dob
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  postUserHandler,
};
