const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
   sequelize.define('Event', { 

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
       date: { 
           type: DataTypes.DATE,
           allowNull: false,
       },
       time: { 
           type: DataTypes.TIME,
           allowNull: false,
       },
       location: { 
           type: DataTypes.STRING,
           allowNull: false,
       },
       image: { 
           type: DataTypes.STRING,
           allowNull: true,
       }

   });
}
  