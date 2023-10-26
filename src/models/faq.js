const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "FrequentlyAskedQuestions",
    {
      faqID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: false, //algo
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );
};
