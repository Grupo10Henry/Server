const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    sequelize.define('User', { 

        userID: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: { 
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
            unique: true,
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false, 
        }

    });
}