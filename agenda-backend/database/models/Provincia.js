const { DataTypes } = require('sequelize');
const sequelize = require('../index.js');

const Provincia = sequelize.define('Provincia', {
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'provincias',
    timestamps: false
});

module.exports = Provincia;