const Contacto = require('../database/models/Contacto');
const Provincia = require('../database/models/Provincia');

const getFilters = {
    attributes: ['id', 'nombre', 'apellido', 'telefono'],
    include: {
        model: Provincia,
        as: 'provincia',
        attributes: ['id', 'nombre']
    }
};

exports.getAllContacts = async (req, res) => {

    try {
        const contacts = await Contacto.findAll(getFilters);
        res.json(contacts);
    } catch (err) {
        throw err;
    }

};

exports.getContactById = async (req, res) => {
    try {
        const contact = await Contacto.findByPk(req.params.id, getFilters);
        if (!contact) return res.status(404).json({ Message: 'Contact not found.' });
        return res.json(contact);

    } catch (err) {
        throw err;
    }
};

exports.createContact = async (req, res) => {

    try {
        const { nombre, apellido, telefono, provinciaId } = req.body;

        // validar estas inputs
        let contact = await Contacto.create({
            nombre,
            apellido,
            telefono,
            'provincia_id': provinciaId
        });

        contact = await Contacto.findByPk(contact.id, getFilters);

        return res.status(201).json(contact);
    } catch (err) {
        throw err;
    }
};

exports.updateContactById = async (req, res) => {
    try {
        let contact = await Contacto.findByPk(req.params.id);
        if (!contact) return res.status(404).json({ message: 'Contact not found' });

        const { nombre, apellido, telefono, provinciaId } = req.body;
        //validar estas nuevas inputs
        contact.update({
            nombre,
            apellido,
            telefono,
            'provincia_id':provinciaId
        });

        contact = await Contacto.findByPk(contact.id, getFilters);

        return res.status(201).json(contact);
    } catch (err) {
        throw err;
    }
};

exports.deleteContactById = async (req, res) => {

    try {
        const contact = await Contacto.findByPk(req.params.id);

        if (!contact) return res.status(404).json({ Message: 'Contact not found.' });
        await contact.destroy();
        return res.json({ message: 'Contact deleted.' });

    }

    catch (err) {
        throw err;
    }
};