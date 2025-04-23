const connection = require('../config/database');
const { DataTypes } = require('sequelize');
const BlogModel = require('./blogModel');

const BlogCategoryModel = connection.define('BlogCategory', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        validate: {
            isIn: [[0, 1]]
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'createdAt'
    }
}, {
    tableName: 'blogcategories',
    timestamps: false,
});



module.exports = BlogCategoryModel;