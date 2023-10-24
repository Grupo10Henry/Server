const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    sequelize.define('Payments', { 

        paymentID: { 
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false
        },
        userID: { 
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'User', 
                key: 'userID'  
            }
        },
        amount: { 
            type: DataTypes.FLOAT,
            allowNull: false
        },
        date: { 
            type: DataTypes.DATE,
            allowNull: false,
        },
        paymentMethod: { 
            type: DataTypes.STRING,
            allowNull: false,
        }

    });
}