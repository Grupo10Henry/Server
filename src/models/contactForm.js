const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ContactForm", {
    contactFormID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    consultation: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
