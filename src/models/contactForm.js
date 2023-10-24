const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    sequelize.define('ContactForm', { 

        contactFormID: { 
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false,
        },
        userID: { 
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'User', 
                key: 'userID' 
            }
        },
        title: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: { 
            type: DataTypes.STRING,
            allowNull: true,
        },
        inquiry: { 
            type: DataTypes.TEXT,
            allowNull: false,
        }

    });
}
