const { Seat, User, Event, Paystub } = require("../../db");

const getSeatDetailsController = async (seatID) => {
    try {
        const seat = await Seat.findByPk(seatID);
        if (!seat) {
            return { error: 'Asiento no encontrado' };
        }
        const user = await User.findByPk(seat.userID, {
            attributes: ['name', 'lastName', 'phone', 'email'],
        });
        const event = await Event.findByPk(seat.eventID, {
            attributes: ['name', 'locationName', 'adressLocation', 'date', 'time'],
        });
        const paystub = seat.paystubID ? await Paystub.findByPk(seat.paystubID, {
            attributes: ['paymentNum'],
        }) : null;

        return {
            seat,
            user,
            event,
            paystub,
        };
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = { getSeatDetailsController };