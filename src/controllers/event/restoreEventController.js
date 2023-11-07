const { Event } = require("../../db");

const restoreEventController = async (id) => {
  const event = await Event.findByPk(id, { paranoid: false });

  if (!event) {
    throw new Error("Evento no encontrado");
  }

  // Restaurar el Event estableciendo deletedAt a null
  await event.restore();

  return event;
};

module.exports = { restoreEventController };
