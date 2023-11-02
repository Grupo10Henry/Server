// Eve
const {
  getIdEventController,
} = require("../../controllers/event/getIdEventController");
const getIdEventHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await getIdEventController(id);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getIdEventHandler,
};
