const { Seat } = require("../../db");

const getSeatByIdController = async (seatID) => {
    try {
      const seat = await Seat.findByPk(seatID);
      if (!seat) {
        return null; 
      }
      return seat; 
    } catch (error) {
      
      throw error;
    }
  };
  
  module.exports = { getSeatByIdController };