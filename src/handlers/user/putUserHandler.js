//Eve
const {
  putUserController,
} = require("../../controllers/user/putUserController");

//Necesito recibir un id y un objeto con la informacion a modificar: ej {name : Evelyn}
//IMPORTANTE!! VALIDAR NO CAMBIAR EMAIL!!!
const putUserHandler = async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedUser = await putUserController(userId, updatedData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putUserHandler,
};
