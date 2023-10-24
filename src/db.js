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

const { user, contactForm, faq, seat, event, ticket } = sequelize.models;

user.hasMany(contactForm, { foreignKey: "userId" }); //  Usuario tiene muchos FormContacto
user.hasMany(faq, { foreignKey: "userId" }); //  Usuario tiene muchas ResenaCalificacion
user.hasMany(Carrito, { foreignKey: "userId" }); //  Usuario tiene muchos Carrito
user.belongsToMany(event, { through: "userEvent" }); //  Usuario pertenece a muchos Evento
event.belongsToMany(event, { through: "eventUser" });
event.hasMany(faq, { foreignKey: "eventId" }); //  Evento tiene muchas ResenaCalificacion
event.hasMany(seat, { foreignKey: "eventId" }); // Evento tiene muchas Butaca

user.hasMany(seat, { foreignKey: "userId" }); // Usuario tiene muchas Butaca
user.hasMany(ticket, { foreignKey: "userId" }); // Usuario tiene muchas Boleta
ticket.hasMany(Butaca, { foreignKey: "ticketId" }); // Boleta tiene muchas Butaca
event.hasMany(ticket, { foreignKey: "eventId" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
