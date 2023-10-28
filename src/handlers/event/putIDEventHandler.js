//Eve
const {
  putEventController,
} = require("../../controllers/event/putEventController");

//Necesito recibir un id y un objeto con la informacion a modificar: ej {name : Evelyn}
const putIDEventHandler = async (req, res) => {
  const eventId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedEvent = await putEventController(eventId, updatedData);
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putIDEventHandler,
};
