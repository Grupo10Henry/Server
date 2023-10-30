const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Seat",
    {
      // 'Butaca'

      seatID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      eventID: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Event",
          key: "eventID",
        },
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "User",
          key: "userID",
        },
      },
      paystubID: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Paystub",
          key: "paystubID",
        },
      },
      rows: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      columns: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seatLocation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sector: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      exists: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      paranoid: true,
    }
  );
};
