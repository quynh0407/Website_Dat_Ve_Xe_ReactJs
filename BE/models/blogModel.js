const connection = require('../config/database');
const { DataTypes } = require('sequelize');
const UserModel = require('./userModel'); 
const BlogCategoryModel = require('./blogCategoryModel');

const BlogModel = connection.define('Blog', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: UserModel,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: BlogCategoryModel,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    status: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        validate: {
            isIn: [[0, 1]]
        }
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    createAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
    }
}, {
    tableName: 'blogs',
    timestamps: false,
});

BlogModel.belongsTo(UserModel, { foreignKey: 'userId' });
module.exports = BlogModel;
