//Eve
const { Event, Paystub } = require("../../db");

const deleteEventController = async (eventId) => {
  const event = await Event.findByPk(eventId);
  const pays = await Paystub.findAll({ where: { eventID: eventId } });
  if (!event) {
    throw new Error("Evento no encontrado");
  }

  if (pays.length) {
    throw new Error(
      "Este evento ya tiene pagos realizados por usuarios, por favor edite el evento para cancerlo"
    );
  } else {
    event.destroy({
      where: {
        eventID: eventId,
      },
    });
    return event;
  }
};

module.exports = {
  deleteEventController,
};
