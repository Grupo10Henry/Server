const {
    getSeatsByUserAndEventController,
  } = require("../../controllers/seat/getSeatsByUserAndEventController");
  
  const getSeatsByUserAndEventHandler = async (req, res) => {
    try {
      const userID = req.params.userID;  // si necesitas lo cambio por query
      const eventID = req.params.eventID; 
  
      const seats = await getSeatsByUserAndEventController(userID, eventID);
  
      res.status(200).json(seats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = { getSeatsByUserAndEventHandler };