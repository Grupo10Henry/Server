const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Paystub", {
    paystubID: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "userID",
      },
    },
    eventID: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Event",
        key: "eventID",
      },
    },
    issueDate: {
      // 'fechaEmision'
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW, // --> se carga la fecha en el momento en que se genera la "boleta de pago"
      allowNull: false,
    },
    tickets: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    paymentNum: {
      // 'numPago'
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDonation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};
