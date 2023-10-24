const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    sequelize.define('Cart', { 

        cartID: { 
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false,
        },
        seatID: { 
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Seat', 
                key: 'seatID' 
            }
        },
        userID: { 
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'User', 
                key: 'userID' 
            }
        } 

    });
}