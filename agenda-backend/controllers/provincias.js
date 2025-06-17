const Provincia = require('../database/models/Provincia');

exports.getAllProvinces = async (req, res) => {
    try {
        const provinces = await Provincia.findAll();
        res.json(provinces);
    } catch (err) {
        throw err;
    }
}