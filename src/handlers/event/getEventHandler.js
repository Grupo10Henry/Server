// Eve
const {
  getEventController,
} = require("../../controllers/event/getEventController");
const getEventHandler = async (req, res) => {
  const { search, category, date, price } = req.body;
  try {
    const event = await getEventController(search, category, date, price);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getEventHandler,
};
