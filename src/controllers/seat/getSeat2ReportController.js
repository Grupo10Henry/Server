const { Seat, Event } = require("../../db");
const { Op } = require("sequelize");

const getSeat2ReportController = async () => {
  try {
    const seatsWithPaystub = await Seat.findAll({
      where: { paystubID: { [Op.ne]: null } },
      attributes: ["seatID", "seatLocation", "eventID"],
    });
    const eventIds = [...new Set(seatsWithPaystub.map((seat) => seat.eventID))];

    const events = await Event.findAll({
      where: { eventID: eventIds },
      attributes: ["eventID", "name"],
    });

    const eventMap = events.reduce((acc, event) => {
      acc[event.eventID] = event.name;
      return acc;
    }, {});

    const report = seatsWithPaystub.map((seat) => ({
      ...seat.dataValues,
      eventName: eventMap[seat.eventID],
    }));
    const eventNameCounts = report?.reduce((counts, item) => {
      counts[item.eventName] = (counts[item.eventName] || 0) + 1;
      return counts;
    }, {});

    const countArray = Object.values(eventNameCounts).sort((a, b) => b - a);

    return countArray;
  } catch (error) {
    return { error: error.message };
  }
};
module.exports = { getSeat2ReportController };
