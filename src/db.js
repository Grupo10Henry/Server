// Evelyn estructura, Lucía relaciones.
require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_DEPLOY } = process.env;

const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize(`postgres://${DB_DEPLOY}/tubutaca`, {
  logging: false,
  native: false,
});
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


const { User, ContactForm, Review, Seat, Event, Paystub, carrito, review2 } =

  sequelize.models;
//relacion de Users
User.hasMany(ContactForm, { foreignKey: "userID", as: "user_contactForms" }); //  Usuario tiene muchos FormContacto
User.hasMany(Review, { foreignKey: "userID", as: "user_review" }); //  Usuario tiene muchas reviews
User.hasMany(Seat, { foreignKey: "userID", as: "user_seat" }); // Usuario tiene muchas Butaca
User.hasMany(Paystub, { foreignKey: "userID", as: "user_paystub" });
// Relacion de Events
Event.hasMany(Review, { foreignKey: "eventID", as: "event_review" }); //  Evento tiene muchas reviews
Event.hasMany(Seat, { foreignKey: "eventID", as: "event_seat" }); // Evento tiene muchas Butaca
Event.hasMany(Paystub, { foreignKey: "eventID", as: "event_paystub" });
//Relación Paystub
Paystub.hasMany(Seat, { foreignKey: "paystubID", as: "paystub_seat" }); // Boleta tiene muchas Butaca

//Relacion de N-N User-Event
User.belongsToMany(Event, { through: "userEvent" }); //  Usuario pertenece a muchos Evento
Event.belongsToMany(User, { through: "userEvent" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
