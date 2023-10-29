//Eve
const { Event } = require("../../db");

const putEventController = async (eventId, updatedData) => {
  // Verifica si el usuario con el ID proporcionado existe
  const existingEvent = await Event.findByPk(eventId);

  if (!existingEvent) {
    throw new Error("Evento no encontrado");
  }

  // Actualiza los campos proporcionados en updatedData
  await existingEvent.update(updatedData);

  return existingEvent;
};

module.exports = { putEventController };
