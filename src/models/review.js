const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Review', { 

      reviewID: { 
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4, 
          allowNull: false,
      },
      review: { 
          type: DataTypes.TEXT,
          allowNull: true,
      },
      rating: { 
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      reviewDate: { 
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false,
      }

  });
}