const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    sequelize.define('Admin', {
     
        adminID: {
            type: DataTypes.UUID,
            primaryKey: true, 
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false,
        },
        firstName: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false,
        } 
    });
}