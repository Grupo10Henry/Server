// lu
const {
  deleteSeatController,
} = require("../../controllers/seat/deleteSeatController");

const deleteSeatHandler = (req, res) => {
  const { id } = req.params;

  deleteSeatController(id)
    .then((result) => {
      if (result) {
        res.json({ message: "Asiento eliminado exitosamente" });
      } else {
        res.status(404).json({ message: "Asiento no encontrado" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error al eliminar el asiento" });
    });
};

module.exports = { deleteSeatHandler };
