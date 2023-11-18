const { Seat, Event } = require("../../db");
const { Op } = require("sequelize");

const getSeatReportController = async () => {
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

    const sortedCounts = Object.entries(eventNameCounts)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([eventName]) => eventName);

    return sortedCounts;
  } catch (error) {
    return { error: error.message };
  }

};
module.exports = { getSeatReportController };
