const {
  getSeatByEventController,
} = require("../../controllers/seat/getSeatByEventController");

const getSeatByEventHandler = (req, res) => {
  const { eventID, sector } = req.params;

  getSeatByEventController(eventID, sector)
    .then((seats) => {
      res.json(seats);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error al obtener los asientos" });
    });
};

module.exports = { getSeatByEventHandler };
