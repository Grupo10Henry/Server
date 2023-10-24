const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    sequelize.define('Ticket', { // 'Boleta' traducido a 'Ticket'

        ticketID: { 
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
        eventID: { 
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Event', 
                key: 'eventID' 
            }
        },
        issueDate: { // 'fechaEmision' 
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        rate: { // 'tarifa'
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        tickets: { 
            type: DataTypes.FLOAT,
            allowNull:false,
        },
        taxes: { // 'impuestos' 
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        paymentNum: { // 'numPago' 
            type:DataTypes.STRING,
            allowNull: false,
        }
    });
}
