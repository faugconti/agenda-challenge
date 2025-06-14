const Provincia = require('../models/Provincia');
const Contacto = require('../models/Contacto');

const provincias = [
    { nombre: 'CABA' },
    { nombre: 'Buenos Aires' },
    { nombre: 'Catamarca' },
    { nombre: 'Chaco' },
    { nombre: 'Chubut' },
    { nombre: 'Córdoba' },
    { nombre: 'Corrientes' },
    { nombre: 'Entre Ríos' },
    { nombre: 'Formosa' },
    { nombre: 'Jujuy' },
    { nombre: 'La Pampa' },
    { nombre: 'La Rioja' },
    { nombre: 'Mendoza' },
    { nombre: 'Misiones' },
    { nombre: 'Neuquén' },
    { nombre: 'Río Negro' },
    { nombre: 'Salta' },
    { nombre: 'San Juan' },
    { nombre: 'San Luis' },
    { nombre: 'Santa Cruz' },
    { nombre: 'Santa Fe' },
    { nombre: 'Santiago del Estero' },
    { nombre: 'Tierra del Fuego' },
    { nombre: 'Tucumán' }
];

const contactos = [
    {
        nombre: 'Pedro',
        apellido: 'Sanchez',
        telefono: '3814443333',
        provincia_id: 24
    }, {
        nombre: 'Marcos',
        apellido: 'Ledesma',
        telefono: '1112223313',
        provincia_id: 1
    }
]

const seed = async () => {
    try {
        await Provincia.bulkCreate(provincias);
        await Contacto.bulkCreate(contactos);
        console.log('[ok] Data loaded');
    } catch (error) {
        console.error('[Error] Error loading data to db', error);
    }
}

module.exports = seed;