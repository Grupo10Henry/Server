const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    sequelize.define('User', { 

        userID: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
            unique: true,
        },
        phone: {
            type:DataTypes.STRING,
            allowNull: false
        },
        password: { 
            type: DataTypes.STRING,
            allowNull: false, 
        },
        identityCard: {
            tpye: DataTypes.INTEGER,
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATEONLY,
            validate: {
                isDate: true,
            },
            allowNull:false
        }

    });
}