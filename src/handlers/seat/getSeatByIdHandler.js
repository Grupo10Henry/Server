

const { getSeatByIdController } = require("../../controllers/seat/getSeatByIdController");

const getSeatByIdHandler = async (req, res) => {
  const { id } = req.params; 
  try {
    const seat = await getSeatByIdController(id);
    if (seat) {
      res.json(seat); 
    } else {
      res.status(404).json({ message: "Asiento no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al buscar el asiento" });
  }
};

module.exports = { getSeatByIdHandler };
