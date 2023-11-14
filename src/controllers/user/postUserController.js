//Eve
const { User } = require("../../db");
const { sendEmailRegister } = require("../../Helpers/sendEmailRegister");
const postUserController = async (
  name,
  lastName,
  email,
  phone,
  password,
  identityCard,
  dob,
  image
) => {
  const filteredDB = await User.findAll({
    where: {
      email: email,
    },
  });

  if (filteredDB.length === 0) {
    const newUser = await User.create({
      name,
      lastName,
      email,
      phone,
      password,
      identityCard,
      dob,
      image,
    });
    sendEmailRegister(newUser.email);
    return newUser;
  } else
    throw new Error(
      "Ya existe un usuario asociado a ese email, por favor inicie sesión"
    );
};
module.exports = { postUserController };
