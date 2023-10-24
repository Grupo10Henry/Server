const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    sequelize.define('CompanyInfo', { 

        companyInfoID: { 
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false,
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: { 
            type: DataTypes.STRING,
            allowNull: false,
        }

    });
}