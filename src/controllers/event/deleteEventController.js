const { Event } = require("../../db");

const deleteEventController = async (eventId) => {
  const event = await Event.findByPk(eventId);

  if (!event) {
    throw new Error("Usuario no encontrado");
  }
  event.destroy({
    where: {
      eventID: eventId, // ID del usuario que deseas eliminar lógicamente
    },
  });
  return event;
};

module.exports = {
  deleteEventController,
};
