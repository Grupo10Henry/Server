const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Event",
    {
      eventID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      locationName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adressLocation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mapLocation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bannerImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      planImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      views: {
        type: DataTypes.INTEGER,
        allownull: false,
      },
      priceMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      priceMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );
};
