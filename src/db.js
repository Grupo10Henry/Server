// Evelyn estructura, Lucía relaciones.
require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${"Nombre base de datos"}`,
  { logging: false, native: false }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, ContactForm, FrequentlyAskedQuestions, Seat, Event, Ticket } =
  sequelize.models;
//relacion de Users
User.hasMany(ContactForm, { foreignKey: "userId", as: "user_contactForms" }); //  Usuario tiene muchos FormContacto
User.hasMany(FrequentlyAskedQuestions, {
  foreignKey: "userId",
  as: "user_faq",
}); //  Usuario tiene muchas ResenaCalificacion
User.hasMany(Seat, { foreignKey: "userId", as: "user_seat" }); // Usuario tiene muchas Butaca
User.hasMany(Ticket, { foreignKey: "userId", as: "user_ticket" }); // Usuario tiene muchas Boleta
// Relacion de Events
Event.hasMany(FrequentlyAskedQuestions, {
  foreignKey: "eventId",
  as: "event_faq",
}); //  Evento tiene muchas ResenaCalificacion
Event.hasMany(Seat, { foreignKey: "eventId", as: "event_seat" }); // Evento tiene muchas Butaca
Event.hasMany(Ticket, { foreignKey: "eventId", as: "event_ticket" });
//Relación Ticket
Ticket.hasMany(Seat, { foreignKey: "ticketId", as: "ticket_seat" }); // Boleta tiene muchas Butaca

//Relacion de N-N User-Event
User.belongsToMany(Event, { through: "userEvent" }); //  Usuario pertenece a muchos Evento
Event.belongsToMany(Event, { through: "userEvent" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
