const {
  postSeatEventController,
} = require("../../controllers/seat/postSeatEventController");

const postSeatEventHandler = (req, res) => {
  const { eventID, sector } = req.params;

  postSeatEventController(eventID, sector)
    .then((seats) => {
      res.json(seats);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error al obtener los asientos" });
    });
};

module.exports = { postSeatEventHandler };
