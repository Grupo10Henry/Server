// Eve
const {
  getNextEventController,
} = require("../../controllers/event/getNextEventController");
const getNextEventHandler = async (req, res) => {
  try {
    const event = await getNextEventController();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getNextEventHandler,
};
