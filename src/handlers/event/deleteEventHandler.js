//Eve
const {
  deleteEventController,
} = require("../../controllers/event/deleteEventController");

const deleteEventHandler = async (req, res) => {
  const eventId = req.params.id;
  try {
    const deletedEvent = await deleteEventController(eventId);
    res.status(200).json(deletedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteEventHandler,
};
