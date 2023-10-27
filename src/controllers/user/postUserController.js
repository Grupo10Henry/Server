//Eve
const { User } = require("../../db");

const postUserController = async (
  isAdmin,
  name,
  lastName,
  email,
  phone,
  password,
  identityCard,
  dob
) => {
  const filteredDB = await User.findAll({
    where: {
      email: email,
    },
  });

  if (filteredDB.length === 0) {
    const newUser = await User.create({
      isAdmin,
      name,
      lastName,
      email,
      phone,
      password,
      identityCard,
      dob,
    });
    return newUser;
  } else
    throw new Error(
      "Ya existe un usuario asociado a ese email, por favor inicie sesión"
    );
};
module.exports = { postUserController };
