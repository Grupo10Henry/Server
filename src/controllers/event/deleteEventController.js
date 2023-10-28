const { Event } = require("../../db");

const deleteEventController = async (eventId) => {
  const event = await Event.findByPk(eventId);

  if (!event) {
    throw new Error("Evento no encontrado");
  }
  event.destroy({
    where: {
      eventID: eventId, // ID del evento que deseas eliminar lógicamente
    },
  });
  return event;
};

module.exports = {
  deleteEventController,
};
