const {
    getUserByDateController,
  } = require("../../controllers/user/getUserByDateController");
  
  const getUserByDateHandler = async (req, res) => {
    const { year, month } = req.params;
  
    try {
      const users = await getUserByDateController(year, month);
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener usuarios por fecha" });
    }
  };
  
  module.exports = { getUserByDateHandler };
  