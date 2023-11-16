const { Seat, Event } = require("../../db");
const { Op } = require("sequelize");

const getSeatReportController = async () => {
    try {
       
        const seatsWithPaystub = await Seat.findAll({
            where: { paystubID: { [Op.ne]: null } },
            attributes: ['seatID', 'seatLocation', 'eventID'],
        });

        
        const eventIds = [...new Set(seatsWithPaystub.map(seat => seat.eventID))];

        // Obtener eventos basados en los eventIDs
        const events = await Event.findAll({
            where: { eventID: eventIds },
            attributes: ['eventID', 'name'],
        });

      
        const eventMap = events.reduce((acc, event) => {
            acc[event.eventID] = event.name;
            return acc;
        }, {});

        
        const report = seatsWithPaystub.map(seat => ({
            ...seat.dataValues,
            eventName: eventMap[seat.eventID]
        }));

        return report;
    } catch (error) {
        return { error: error.message };
    }
};
module.exports = { getSeatReportController };