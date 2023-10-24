const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    sequelize.define('Seat', { // 'Butaca' translated to 'Seat'

        seatID: { 
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false,
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: { 
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        eventID: { 
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Event', 
                key: 'eventID' 
            }
        }

    });
}