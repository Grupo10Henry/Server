const { Seat } = require("../../db");

const getSeatReportController = async () => {
  const seats = await Seat.findAll();

  const uniqueSeatsMap = new Map();

  seats.forEach((seat) => {
    const seatID = seat.seatID;

    if (!uniqueSeatsMap.has(seatID)) {
      uniqueSeatsMap.set(seatID, {
        seatID: seat.seatID,
        seatLocation: seat.seatLocation,
        eventID: seat.eventID,
        paystubID: seat.paystubID,
      });
    }
  });

  const uniqueSeatsInfo = Array.from(uniqueSeatsMap.values());

  return uniqueSeatsInfo;
};

module.exports = { getSeatReportController };
