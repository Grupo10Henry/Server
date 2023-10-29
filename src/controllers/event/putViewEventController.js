//Eve
const { Event } = require("../../db");

const putViewEventController = async (eventId) => {
  // Verifica si el usuario con el ID proporcionado existe
  const existingEvent = await Event.findByPk(eventId);

  if (!existingEvent) {
    throw new Error("Evento no encontrado");
  }
  const add = existingEvent.views + 1;
  // Actualiza los campos proporcionados en updatedData
  await existingEvent.update({ views: add });

  return existingEvent;
};

module.exports = { putViewEventController };
