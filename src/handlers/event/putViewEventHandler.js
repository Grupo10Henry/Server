//Eve
const {
  putViewEventController,
} = require("../../controllers/event/putViewEventController");

//Necesito recibir un id y un objeto con la informacion a modificar: ej {name : Evelyn}
const putViewEventHandler = async (req, res) => {
  const eventId = req.params.id;

  try {
    const updatedEvent = await putViewEventController(eventId);
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putViewEventHandler,
};
