const { User } = require("../../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginController = async (email, password) => {
  const user = await User.findOne({ where: { email: email } });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error("Contraseña incorrecta");
  }

  const userInfo = {
    userID: user.userID,
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    phone: user.phone,
    identityCard: user.identityCard,
    dob: user.dob,
    image: user.image, 
  };

  const token = jwt.sign(
    { userInfo, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    token,
    isAdmin: user.isAdmin,
    userInfo,
  };
};

module.exports = { loginController };