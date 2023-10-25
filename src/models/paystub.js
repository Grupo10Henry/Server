const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    sequelize.define('Paystub', {   

        paystubID: { 
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
            defaultValue: DataTypes.NOW, // --> se carga la fecha en el momento en que se genera la "boleta de pago"
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
        },
        isDonation: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
}






