const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Carrito", {
    carritoID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    eventID: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    paymentNum: {
      // 'numPago'
      type: DataTypes.STRING,
      allowNull: false,
    },
    seatsLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    sector: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
