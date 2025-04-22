const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const ResetTokenModel = sequelize.define('ResetTokenModel', {
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    tableName: 'token',
    timestamps: true
});

module.exports = ResetTokenModel;
