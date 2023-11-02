// Eve
const {
  getPreviusEventController,
} = require("../../controllers/event/getPreviusEventController");
const getPreviusEventHandler = async (req, res) => {
  try {
    const event = await getPreviusEventController();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getPreviusEventHandler,
};
