const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "CompanyInfo",
    {
      companyInfoID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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
      adress: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      businessHours: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dataPolicy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false },
    {
      paranoid: true,
    }
  );
};
