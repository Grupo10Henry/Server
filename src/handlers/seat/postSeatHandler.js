// lu
const {
  postSeatController,
} = require("../../controllers/seat/postSeatController");

const postSeatHandler = async (req, res) => {
  try {
    const { eventID, rows, columns, sector, price } = req.body;

    //Realiza validaciones de los campos necesarios
    if (!eventID || !rows || !columns || !sector || !price) {
      return res
        .status(400)
        .json({ error: "Faltan campos obligatorios en los datos del asiento" });
    }
    const newSeats = await postSeatController(
      eventID,
      rows,
      columns,
      sector,
      price
    );

    res.status(201).json(newSeats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postSeatHandler };
