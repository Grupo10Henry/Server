const {
  restoreEventController,
} = require("../../controllers/event/restoreEventController");

const restoreEventHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const restoredEvent = await restoreEventController(id);
    res.status(200).json(restoredEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { restoreEventHandler };
