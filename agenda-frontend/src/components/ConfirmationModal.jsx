import { useContext } from 'react';
import Modal from './Modal';
import { ContactsContext } from '../context/ContactsContext';


const ConfirmationModal = ({ onClose }) => {

    const 
        {deleteContactHandler,
        currentContact} = useContext(ContactsContext);

    const handleDeleteContact = () => {

        // console.log(currentContact)
        deleteContactHandler(currentContact.id);
        onClose();
    }

    return (
        <Modal onClose={onClose} className={'delete'}>
            <h2>¿Are you sure?</h2>
            <button onClick={handleDeleteContact}>Confirm</button>
            <button onClick={onClose}>Cancel</button>
        </Modal>
    )
}

export default ConfirmationModal;