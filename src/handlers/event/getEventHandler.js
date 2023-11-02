// Eve
const {
  getEventController,
} = require("../../controllers/event/getEventController");
const {
  getAllEventController,
} = require("../../controllers/event/getAllEventController");
const getEventHandler = async (req, res) => {
  const { search, category, date, price } = req.query;
  try {
    if (search || category || date || price) {
      const event = await getEventController(search, category, date, price);
      res.status(200).json(event);
    } else {
      const allEvents = await getAllEventController();
      res.status(200).json(allEvents);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getEventHandler,
};
