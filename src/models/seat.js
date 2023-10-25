const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    sequelize.define('Seat', { // 'Butaca' 

        seatID: { 
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false,
        },
        eventID: { 
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Event', 
                key: 'eventID' 
            }
        },
        userID: { 
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'User', 
                key: 'userID' 
            }
        },
        paystubID: { 
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Paystub', 
                key: 'paystubID' 
            }
        },
        row: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        column: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sector: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: { 
            type: DataTypes.FLOAT,
            allowNull:false,
        },
        rate: { // 'tarifa'
            type: DataTypes.FLOAT,
            allowNull: false,
        },  
        taxes: { // 'impuestos' 
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        status: { 
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        exists:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }    
    });
}