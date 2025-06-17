const Provincia = require('./Provincia');
const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Contacto = sequelize.define('Contacto', {
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    provincia_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'provincias',
            key: 'id'
        }
    }
}, {
    tableName: 'contactos',
    timestamps: false
});

Contacto.belongsTo(Provincia, {
  foreignKey: 'provincia_id',
  as: 'provincia'
});


module.exports = Contacto;
