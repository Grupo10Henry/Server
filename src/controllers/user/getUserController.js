const { User } = require("../../db");
const { Op } = require("sequelize");

const getUserController = async (name) => {
  // Utiliza la opción paranoid: false para incluir registros eliminados lógicamente
  if (name) {
    const user = await User.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    if (user) return user;
    else throw new Error("No existe usuario con ese nombre");
  } else {
    const userDataBase = await User.findAll({
      paranoid: false,
      order: [
        [User.sequelize.fn("lower", User.sequelize.col("name")), "ASC"],
        [User.sequelize.fn("lower", User.sequelize.col("lastName")), "ASC"],
      ],
    });

    return [...userDataBase];
  }
};

module.exports = {
  getUserController,
};
