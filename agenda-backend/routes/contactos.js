const express = require('express');
const router = express.Router();

const {
    getAllContacts,
    getContactById,
    createContact,
    updateContactById,
    deleteContactById
} = require('../controllers/contactos');

router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', createContact);
router.put('/:id', updateContactById)
router.delete('/:id', deleteContactById);

module.exports = router;