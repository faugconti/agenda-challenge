import { createContext, useState, useEffect } from 'react';

const baseUrl = import.meta.env.VITE_API_URL; // solo con vite 
export const ContactsContext = createContext();


const ContactsProvider = ({ children }) => {

    const [contacts, setContacts] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setModalIsOpen] = useState(false); // modal para editar/crear
    const [isDeleteModalOpen, setDeleteModal] = useState(false);
    const [currentContact, setCurrentContact] = useState(null);

    useEffect(() => {
        fetch(baseUrl + '/api/contacts')
            .then(res => {
                if (!res.ok) throw new Error('Error fetching contacts');
                return res.json();
            })
            .then(data => setContacts(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));

        fetch(baseUrl + '/api/provinces')
            .then(res => {
                if (!res.ok) throw new Error('Error fetching provinces');
                return res.json();
            })
            .then(data => setProvinces(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const createContactHandler = contact => {
        setLoading(true);
        fetch(`${baseUrl}/api/contacts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)
        })
            .then(res => {
                if (!res.ok) throw new Error('Error creating contact');
                return res.json()
            })
            .then(contact => setContacts(prevContacts => [...prevContacts, contact]))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }

    const editContactHandler = contact => {
        setLoading(true);
        fetch(`${baseUrl}/api/contacts/${contact.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)
        })
            .then(res => {
                if (!res.ok) throw new Error('Error editing contact');
                return res.json()
            })
            .then(contact => setContacts(prev => prev.map(c => c.id === contact.id ? contact : c)))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }

    const deleteContactHandler = id => {
        setLoading(true);
        fetch(`${baseUrl}/api/contacts/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) throw new Error('Error deleting contact');
                setContacts(contacts.filter(c => c.id !== id))
            })
            .catch(err => setError('Error deleting'))
            .finally(() => setLoading(false));
    }

    const closeModalHandler = () => {
        setModalIsOpen(false);
        setCurrentContact(null);
    }

    const closeDeleteModalHandler = () => {
        setDeleteModal(false);
        setCurrentContact(false);
    }

    const openEditModal = (contact) => {
        setCurrentContact(contact);
        setModalIsOpen(true);
    };

    const openDeleteModal = contact => {
        setCurrentContact(contact);
        setDeleteModal(true);
    }



    const value = {
        contacts,
        provinces,
        loading,
        error,
        isModalOpen,
        isDeleteModalOpen,
        currentContact,
        deleteContactHandler,
        closeModalHandler,
        closeDeleteModalHandler,
        openEditModal,
        openDeleteModal,
        createContactHandler,
        editContactHandler
    }

    return (
        <ContactsContext.Provider value={value} >
            {children}
        </ContactsContext.Provider>
    )

}

export default ContactsProvider