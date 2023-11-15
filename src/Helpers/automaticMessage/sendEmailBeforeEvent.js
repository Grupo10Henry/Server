const { sendEmailEventReminder } = require("../sendEmailEventReminder");
const schedule = require("node-schedule");
const { User, userEvent, Event } = require("../../db");

// Programa el envío de correo electrónico un día antes del evento
const sendBefore = async () => {
  // Obtén la lista de usuarios que asistiran al evento en la fecha deseada desde la base de datos
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const events = await Event.findAll({
    where: {
      date: tomorrow,
    },
  });
  const send = events.map(async (event) => {
    const users = await userEvent.findAll({
      where: { eventID: event.eventID },
    });
    const usersData = users.map(
      async (user) => await User.findOne({ where: { userID: user.userID } })
    );
    // Itera a través de la lista de usuarios y programa el envío de correo para cada uno
    usersData.forEach((user) => {
      // Define la fecha para el envío, un día después del evento
      const sendDate = new Date(event.date);
      sendDate.setDate(sendDate.getDate() - 1);

      // Programa el envío del correo electrónico para la fecha específica
      const job = schedule.scheduleJob(sendDate, function () {
        sendEmailEventReminder(user.email);
      });
    });
  });
};

// Ejecuta la función de programación de envío de correos
sendBefore();
